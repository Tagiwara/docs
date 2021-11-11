(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[5131],{72065:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),s=t(93456),l=["components"],d={sidebar_position:1},o="Grundlagen",u={unversionedId:"reference/configuration/home",id:"reference/configuration/home",isDocsHomePage:!1,title:"Grundlagen",description:"evcc ben\xf6tigt eine Konfigurationsdatei in die Installation beschrieben wird. Ohne diese Datei kann evcc nicht genutzt werden. Die Datei selbst ist im YAML Format geschrieben. Dieses Format definiert eine Synthax wodurch eine strukturierte Datenstruktur in Textform erstellt werden kann.",source:"@site/docs/reference/configuration/home.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/home",permalink:"/docs/reference/configuration/home",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/home.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\xdcbersicht",permalink:"/docs/reference/overview"},next:{title:"site",permalink:"/docs/reference/configuration/site"}},c=[{value:"Struktur",id:"struktur",children:[],level:3},{value:"Site",id:"site",children:[],level:3},{value:"Loadpoints",id:"loadpoints",children:[],level:3},{value:"Chargers",id:"chargers",children:[],level:3},{value:"Meters",id:"meters",children:[],level:3},{value:"Vehicles",id:"vehicles",children:[],level:3},{value:"HEMS",id:"hems",children:[],level:3},{value:"Messaging",id:"messaging",children:[],level:3}],m={toc:c};function h(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grundlagen"},"Grundlagen"),(0,a.kt)("p",null,"evcc ben\xf6tigt eine Konfigurationsdatei in die Installation beschrieben wird. Ohne diese Datei kann evcc nicht genutzt werden. Die Datei selbst ist im ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/YAML"},"YAML")," Format geschrieben. Dieses Format definiert eine Synthax wodurch eine strukturierte Datenstruktur in Textform erstellt werden kann."),(0,a.kt)("p",null,"Zur Bearbeitung bzw. Erstellung der Konfigurationsdatei empfehlen wir einen Texteditor zu verwenden, welcher die YAML Synthax beherrscht und damit Fehler aufzeigen kann, z.B. ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"VS Code")," mit der ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"},"YAML Erweiterung")),(0,a.kt)("p",null,"Die Konfigurationsdatei hat standardm\xe4\xdfig den Namen ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," und ist entweder im gleichen Verzeichnis wie das Programm selbst abzulegen, oder unter Linux System auch unter ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/evcc.yaml")," gefunden."),(0,a.kt)("p",null,"Wenn die Konfigurationsdatei nicht gefunden wird, kann diese \xfcber einen Parameter beim Aufruf evcc \xfcbergeben werden: z.B. ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc -c /home/evcc.yaml")),(0,a.kt)("h3",{id:"struktur"},"Struktur"),(0,a.kt)("p",null,"Die Konfigurationsdatei von evcc besteht aus mehreren Bereichen. Um von einem Bereich auf Elemente eines anderen Bereichs zu verweisen, haben einzelne Ger\xe4te einen ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," Parameter, den man frei mit einem Text vergeben kann. Der vergebene Text dient der Identifikation und Referenzierung."),(0,a.kt)("p",null,"Hier eine \xdcberblick \xfcber die Beziehungen der wichtigsten Bestandteile der Konfiguration:"),(0,a.kt)(s.Mermaid,{chart:'graph TD;\n    site("site (Zuhause)")\n    subgraph loadpoints\n      loadpointA("Carport (charger: KEBA)")\n      loadpointB("Garage (charger: Wallbe)")\n    end\n    subgraph meters\n      meterGrid("Discovergy")\n      meterPV("SMA Tripower")\n      meterBattery("LG RESU")\n    end\n    subgraph vehicles\n      vehicleA("VW ID.4")\n      vehicleB("Renault Zoe")\n      vehicleC("Tesla Model Y")\n    end\n\n    loadpointA -- loadpoint.1 --\x3e site\n    loadpointB -- loadpoint.2 --\x3e site\n\n    vehicleA --\x3e loadpointA\n    vehicleB --\x3e loadpointA\n    vehicleB --\x3e loadpointB\n    vehicleC --\x3e loadpointB\n\n    meterGrid -- meters.grid --\x3e site\n    meterPV -- meters.pvs --\x3e site\n    meterBattery -- meters.batterys --\x3e site\n',mdxType:"Mermaid"}),(0,a.kt)("h3",{id:"site"},"Site"),(0,a.kt)("p",null,"Eine ",(0,a.kt)("em",{parentName:"p"},"Site")," beschreibt den Standort mit den vorhandenen und ben\xf6tigten Ger\xe4ten der Hausinstallation und ist f\xfcr das Regeln der verf\xfcgbaren Leistung zust\xe4ndig."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"site"},"Weiterlesen...")),(0,a.kt)("h3",{id:"loadpoints"},"Loadpoints"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Loadpoints")," (Ladepunkte) beschreiben die Ladeinfrastruktur und kombinieren vorhandene ",(0,a.kt)("em",{parentName:"p"},"Charger")," (Wallboxen), ",(0,a.kt)("em",{parentName:"p"},"Vehicle")," (Fahrzeuge) und alles weitere was ein Ladepunkt ben\xf6tigt."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"loadpoints"},"Weiterlesen...")),(0,a.kt)("h3",{id:"chargers"},"Chargers"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Chargers")," (Wallboxen) beinhaltet eine Liste von Wallboxen und deren Eigenschaften, z.B. wie sie angesprochen werden."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"chargers"},"Weiterlesen...")),(0,a.kt)("h3",{id:"meters"},"Meters"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Meters")," (Hausinstallation) ist eine Liste von Ger\xe4ten welche verschiedene Stromfl\xfcsse messen. Dazu geh\xf6ren:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Eingekaufter, Verkaufter Strom"),(0,a.kt)("li",{parentName:"ul"},"PV erzeugte Str\xf6me"),(0,a.kt)("li",{parentName:"ul"},"Ladestrom des EV (falls die Wallbox dies nicht direkt unterst\xfctzt)"),(0,a.kt)("li",{parentName:"ul"},"Str\xf6me der Hausbatterie(n)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"meters"},"Weiterlesen...")),(0,a.kt)("h3",{id:"vehicles"},"Vehicles"),(0,a.kt)("p",null,"Um die Ladung auf einen bestimmten Ladestand (SoC) in EVs zu begrenzen, k\xf6nnen hier die vorhandenen Fahrzeuge und der Online Zugangsdaten angegeben werden."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"vehicles"},"Weiterlesen...")),(0,a.kt)("h3",{id:"hems"},"HEMS"),(0,a.kt)("p",null,"evcc kann die Ladepunkte und deren Ladestr\xf6me an ein anderes Home Energy Management System (HEMS) weitergeben, damit dieses die Informationen z.b. zur Steuerung der Hausbatterie nutzen kann."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"hems"},"Weiterlesen...")),(0,a.kt)("h3",{id:"messaging"},"Messaging"),(0,a.kt)("p",null,"In diesem Bereich k\xf6nnen Ereignisse definiert werden, bei welchen man informiert werden will. Zur Informations\xfcbermittlung werden eine Reihe von unterschiedlichen Systemen unterst\xfctzt."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"messaging"},"Weiterlesen...")))}h.isMDXComponent=!0},11748:function(e,n,t){var i={"./locale":89234,"./locale.js":89234};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=11748}}]);