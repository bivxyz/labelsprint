param(
  [int]$Port = 4173,
  [string]$Root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
)

$resolvedRoot = (Resolve-Path -LiteralPath $Root).Path
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://127.0.0.1:$Port/")
$listener.Start()

$contentTypes = @{
  '.html' = 'text/html; charset=utf-8'
  '.js' = 'text/javascript; charset=utf-8'
  '.css' = 'text/css; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.svg' = 'image/svg+xml'
  '.png' = 'image/png'
  '.jpg' = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.webp' = 'image/webp'
}

while ($listener.IsListening) {
  $context = $listener.GetContext()
  try {
    $relative = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart('/'))
    if ([string]::IsNullOrWhiteSpace($relative)) {
      $relative = 'index.html'
    }

    $candidate = Join-Path $resolvedRoot $relative
    if (Test-Path -LiteralPath $candidate -PathType Container) {
      $candidate = Join-Path $candidate 'index.html'
    }

    $resolvedCandidate = $null
    if (Test-Path -LiteralPath $candidate -PathType Leaf) {
      $resolvedCandidate = (Resolve-Path -LiteralPath $candidate).Path
    }

    if ($resolvedCandidate -and $resolvedCandidate.StartsWith($resolvedRoot, [StringComparison]::OrdinalIgnoreCase)) {
      $bytes = [System.IO.File]::ReadAllBytes($resolvedCandidate)
      $extension = [System.IO.Path]::GetExtension($resolvedCandidate).ToLowerInvariant()
      $context.Response.ContentType = $contentTypes[$extension]
      if (-not $context.Response.ContentType) {
        $context.Response.ContentType = 'application/octet-stream'
      }
      $context.Response.StatusCode = 200
      $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $context.Response.StatusCode = 404
    }
  } catch {
    $context.Response.StatusCode = 500
  } finally {
    $context.Response.OutputStream.Close()
  }
}
