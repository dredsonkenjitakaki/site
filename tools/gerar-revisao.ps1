# Converte o HTML de revisão em .docx usando o Word instalado.
# Uso: powershell -File tools\gerar-revisao.ps1 -Html <entrada.html> -Docx <saida.docx>
param([Parameter(Mandatory)][string]$Html, [Parameter(Mandatory)][string]$Docx)
$w = New-Object -ComObject Word.Application
$w.Visible = $false
try {
  $d = $w.Documents.Open($Html, $false, $true)
  $d.SaveAs2($Docx, 16)
  $d.Close($false)
} finally { $w.Quit() }
Get-Item $Docx | Select-Object FullName, Length
