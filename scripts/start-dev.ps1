# Free port 1337 if a stale Strapi/Node process is listening, then start Strapi develop.
$connections = Get-NetTCPConnection -LocalPort 1337 -State Listen -ErrorAction SilentlyContinue
foreach ($conn in $connections) {
  $pid = $conn.OwningProcess
  if ($pid) {
    Write-Host "Stopping process $pid on port 1337..."
    Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
  }
}
Start-Sleep -Seconds 2
Set-Location $PSScriptRoot\..
npm run develop
