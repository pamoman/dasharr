if(!self.define){let s,e={};const a=(a,o)=>(a=new URL(a+".js",o).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(o,n)=>{const g=s||("document"in self?document.currentScript.src:"")||location.href;if(e[g])return;let i={};const r=s=>a(s,g),c={module:{uri:g},exports:i,require:r};e[g]=Promise.all(o.map((s=>c[s]||r(s)))).then((s=>(n(...s),i)))}}define(["./workbox-1846d813"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/static/chunks/29-fe086d948433af72.js",revision:"wEKno37i0eNqvozIYfrd3"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"wEKno37i0eNqvozIYfrd3"},{url:"/_next/static/chunks/main-d52644f8e98a2f80.js",revision:"wEKno37i0eNqvozIYfrd3"},{url:"/_next/static/chunks/pages/_app-9458947611707781.js",revision:"wEKno37i0eNqvozIYfrd3"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"wEKno37i0eNqvozIYfrd3"},{url:"/_next/static/chunks/pages/index-7b2d662baa38ea01.js",revision:"wEKno37i0eNqvozIYfrd3"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"wEKno37i0eNqvozIYfrd3"},{url:"/_next/static/chunks/webpack-45f9f9587e6c08e1.js",revision:"wEKno37i0eNqvozIYfrd3"},{url:"/_next/static/wEKno37i0eNqvozIYfrd3/_buildManifest.js",revision:"wEKno37i0eNqvozIYfrd3"},{url:"/_next/static/wEKno37i0eNqvozIYfrd3/_middlewareManifest.js",revision:"wEKno37i0eNqvozIYfrd3"},{url:"/_next/static/wEKno37i0eNqvozIYfrd3/_ssgManifest.js",revision:"wEKno37i0eNqvozIYfrd3"},{url:"/assets/config.yml",revision:"1b353cb67b3c967f0b1652945f0ddae3"},{url:"/assets/logos/png/SHODAN.jpg",revision:"d02257295235148d2664097b39255596"},{url:"/assets/logos/png/adguardhome.png",revision:"c2f566179f9ca5d622cd8a5edcbdc8d5"},{url:"/assets/logos/png/adminer.png",revision:"9b4c738b26189986ba2a5a6d26f9d1ab"},{url:"/assets/logos/png/airsonic.png",revision:"b114f89abbb5dec67af61bd9fd2c333d"},{url:"/assets/logos/png/alarmpi.png",revision:"87c84aea5dbc2844945af3a7252da370"},{url:"/assets/logos/png/alertmanager.png",revision:"609888a7ec63038f8bda7f11912189a3"},{url:"/assets/logos/png/alltube.png",revision:"a0ca2a1b172971e073f3df8245ddd2a0"},{url:"/assets/logos/png/amazon.png",revision:"c7c26138a046ecfe4f77c46d30d95be5"},{url:"/assets/logos/png/amd.png",revision:"f757d10aceef9fb0f2673a55edf59b41"},{url:"/assets/logos/png/amvd.png",revision:"32f38c63a0c82ed634f8273d2e4ef1e5"},{url:"/assets/logos/png/ansible.png",revision:"20c1dc762107fbe04ab6b4295575d4c8"},{url:"/assets/logos/png/archivebox.png",revision:"5d7b71e150b01d93f4ebff4f73068af3"},{url:"/assets/logos/png/archiveteamwarrior.png",revision:"757218f183b5cc41ad0941cf3e4a5048"},{url:"/assets/logos/png/argocd.png",revision:"ce389475d66e1c50680160a0c4252b28"},{url:"/assets/logos/png/ariang.png",revision:"f33d01565d98fda6940aa74365722e03"},{url:"/assets/logos/png/artifactory.png",revision:"e8eae05c748eddd1cad035a74f3b6d39"},{url:"/assets/logos/png/authelia.png",revision:"2d7f0e965652f3fd58ea98336719e081"},{url:"/assets/logos/png/avmfritzbox.png",revision:"303392d68d8c1510471178d6f7c108fb"},{url:"/assets/logos/png/awx.png",revision:"dfc2c45d08e77d01daa45b59ba402460"},{url:"/assets/logos/png/azure.png",revision:"c62d5b34c483f78ebbf5d75ba60103c7"},{url:"/assets/logos/png/azuredns.png",revision:"325a3496baf6430770cc1618de93998c"},{url:"/assets/logos/png/bacula.png",revision:"99155512fc58d17e53c0f0185c4d0537"},{url:"/assets/logos/png/badge.png",revision:"f63a4c78779e2a3dbb59219640312f57"},{url:"/assets/logos/png/baikal.png",revision:"aa927dbfcb4103175a766544ec8b93cb"},{url:"/assets/logos/png/bastillion.png",revision:"f8e8c6b86c2e2299c67f59e34051f3b4"},{url:"/assets/logos/png/bazarr.png",revision:"9c2c3b13e668cbc7d97ee20c0b6a1d75"},{url:"/assets/logos/png/beats.png",revision:"f9b70873ea040eb9cd0c0bb8f354a3e2"},{url:"/assets/logos/png/bithumen.png",revision:"a3ee72d5005f99a65974a6b45b338ac0"},{url:"/assets/logos/png/bitwarden.png",revision:"ae78d17d8d3e0e86540e4f8f971248e2"},{url:"/assets/logos/png/booksonic.png",revision:"ea55fdbe457b8364a084273cf1a79799"},{url:"/assets/logos/png/bookstack.png",revision:"8198c0347d7c90e6a9c1f48f64c68ee1"},{url:"/assets/logos/png/box.png",revision:"e8c9131fa67f8f2eb113cfd11d9db602"},{url:"/assets/logos/png/brewpi.png",revision:"f89258de29f776f9c0a4e5cc3ed37cfa"},{url:"/assets/logos/png/buxfer.png",revision:"9e9bf66964a74f44ae74ebd8a30f8cd9"},{url:"/assets/logos/png/cabot.png",revision:"35ca2c765cdba00a59ad48249cd9acd1"},{url:"/assets/logos/png/cadvisor.png",revision:"0e8477250b541799faa5917b0cde473d"},{url:"/assets/logos/png/calibre.png",revision:"a38858edfbc304d270a828c496490c5a"},{url:"/assets/logos/png/calibreweb.png",revision:"b2a9e4f6d02016d74646b497b0524a41"},{url:"/assets/logos/png/cardigann.png",revision:"588c8addafe27c7466a60c4d29a690de"},{url:"/assets/logos/png/checkmk.png",revision:"b52cf4f3146387fb37bdb97c00a86133"},{url:"/assets/logos/png/chevereto.png",revision:"d3f5b91f7729e922ea76b98ad7a8fe32"},{url:"/assets/logos/png/chowdown.png",revision:"e0540205604558310a1e8761c9c12da4"},{url:"/assets/logos/png/chronograf.png",revision:"153caf7a26e8df51bc62f2baff515f99"},{url:"/assets/logos/png/clarkson.png",revision:"7a183d2da34b7e38c561ebc26d4c5c53"},{url:"/assets/logos/png/cloudcmd.png",revision:"9c9dc3f2a56760746152efa870d4705e"},{url:"/assets/logos/png/cockpit.png",revision:"2fe082f315cc8f58da3cdc25603ebb6e"},{url:"/assets/logos/png/cockpitcms.png",revision:"9714e56217154800744e41988f2fd98a"},{url:"/assets/logos/png/code.png",revision:"9ec9db8e89568442c755734fcdea93e4"},{url:"/assets/logos/png/codeserver.png",revision:"70e40f3e8816ee9244a8f691c6a691e8"},{url:"/assets/logos/png/codimd.png",revision:"50f56f11d7c78321914d6d68c7ade3e1"},{url:"/assets/logos/png/concourse.png",revision:"b95eee0c28460a85452fc8e4729ae227"},{url:"/assets/logos/png/couchpotato.png",revision:"2e91e4c875d60ef75ce66bd8b3931535"},{url:"/assets/logos/png/cpanel.png",revision:"a086b1503dbdc77d7ff952a446a23639"},{url:"/assets/logos/png/cryptpad.png",revision:"abcf70b10639c1fdf2f53ec5213027a6"},{url:"/assets/logos/png/cyberchef.png",revision:"3476107817132aaddcca9a7072f81e5a"},{url:"/assets/logos/png/deemix.png",revision:"121bf6fc104effa028664c0db1d89bde"},{url:"/assets/logos/png/deluge.png",revision:"91f949aba75a0352f8c9a6be752dfb06"},{url:"/assets/logos/png/directus.png",revision:"2945391f1949660494a0e2d7160d56c8"},{url:"/assets/logos/png/docker.png",revision:"3feb67e73be535f2f9245b6f857da5fe"},{url:"/assets/logos/png/docspell.png",revision:"eb3e385c2ef754a4987f7c4ea2a54e14"},{url:"/assets/logos/png/dokuwiki.png",revision:"7b56ff80aa2ceb26a4b53b941c8bf271"},{url:"/assets/logos/png/domoticz.png",revision:"640c5b24c964fdc077a24f5b073ede29"},{url:"/assets/logos/png/dozzle.png",revision:"238b66e050d7f0a24b7ea56bfb5114f4"},{url:"/assets/logos/png/drone.png",revision:"6b536ef28eebfaffcd82dcbde41f090d"},{url:"/assets/logos/png/droppy.png",revision:"90b52ef3c76947f0e1d983ddc3cc1639"},{url:"/assets/logos/png/duplicacy.png",revision:"32b6477d052a2171f084e85a5c0164fd"},{url:"/assets/logos/png/duplicati.png",revision:"74120a965156d971dc0e6d7e8468e3b3"},{url:"/assets/logos/png/ebay.png",revision:"082f26b65e6e8442aaeeaff6a85c1dd4"},{url:"/assets/logos/png/elastic.png",revision:"f1c26b02b03e677c7dc0bd8d8c544bb4"},{url:"/assets/logos/png/elasticsearch.png",revision:"3b923a14b3dc20d51355c60430d9d326"},{url:"/assets/logos/png/element.png",revision:"029422f68e241b6b962c40da34aa5e7d"},{url:"/assets/logos/png/emby.png",revision:"0d56e3a6034d89346f934f15317e2dd4"},{url:"/assets/logos/png/embystat.png",revision:"54e2f5847f6ef394ef4042cfcfe390c0"},{url:"/assets/logos/png/emq.png",revision:"c55c2c71f0530defa1342d34e1c053b5"},{url:"/assets/logos/png/erste-george.png",revision:"218152858ea76f145dfc3d865c7c63fa"},{url:"/assets/logos/png/erste.png",revision:"0556199b499c5caf63313e9bcd19e061"},{url:"/assets/logos/png/esphome.png",revision:"70ac79d505973f4ccb6d1053cd9e63c4"},{url:"/assets/logos/png/evebox.png",revision:"f73969799d528aa48c6135c6c6a7a24d"},{url:"/assets/logos/png/facebook-messenger.png",revision:"112d14d0d9d30feadf37e4da5608ebb6"},{url:"/assets/logos/png/facebook.png",revision:"0cfb307c7f59399d921023de40b4cf70"},{url:"/assets/logos/png/filebrowser.png",revision:"3438974965f95e220aa06d606620ce0a"},{url:"/assets/logos/png/filerun.png",revision:"7bf91283c3d4085bf8b5363738083a83"},{url:"/assets/logos/png/firefly.png",revision:"2fb1bab7024e1ba9e4f8a09fd451e8f6"},{url:"/assets/logos/png/firefoxsend.png",revision:"2c31908d03ddc0532e116ef7ac9077e3"},{url:"/assets/logos/png/flexget.png",revision:"8d148c84819772a20aa9b3d1afb01d22"},{url:"/assets/logos/png/flood.png",revision:"952f630a334b32ef6a4633478cf52e87"},{url:"/assets/logos/png/foldingathome.png",revision:"88f929e919957638033638d02297baff"},{url:"/assets/logos/png/freeipa.png",revision:"681764ceb50f4ebc89d1ad7c6da17ab7"},{url:"/assets/logos/png/freenas.png",revision:"7344771f3743e4cfad9330034dfc6ea4"},{url:"/assets/logos/png/freepbx.png",revision:"482709e6b5efeb99e94ba2b120c8e3e5"},{url:"/assets/logos/png/freshrss.png",revision:"6b4e087e033918444276bc99a23f2259"},{url:"/assets/logos/png/ghost.png",revision:"f1c23e7a20fbed76d1383d760b068f01"},{url:"/assets/logos/png/gitea.png",revision:"a85562fb670c0233a9bf1f61b2c6c4ee"},{url:"/assets/logos/png/github.png",revision:"4036b9f58da5a77dafbc9adc16472a08"},{url:"/assets/logos/png/gitlab.png",revision:"7bbc3b45642c96d00583db63cd84f420"},{url:"/assets/logos/png/glances.png",revision:"f43813bb9f999c33f850a308f4afc51d"},{url:"/assets/logos/png/gogs.png",revision:"7185ab5ce1d39c9ef08f0e30f0063052"},{url:"/assets/logos/png/google-calendar.png",revision:"9e6160b31057fb0cd7953fce3889f2fa"},{url:"/assets/logos/png/google-keep.png",revision:"7b051ad220d1df1d986a569bd73fa193"},{url:"/assets/logos/png/google-mail.png",revision:"dc2e1aca00734aa0c7c6f1dae3167725"},{url:"/assets/logos/png/googlemaps.png",revision:"565c16e745c43efcf53bff3a377d3d76"},{url:"/assets/logos/png/gotify.png",revision:"e7a1623607d9f8d2232061a407c101b5"},{url:"/assets/logos/png/grafana.png",revision:"22ad136e043559fe82260f968102cb4d"},{url:"/assets/logos/png/grav.png",revision:"169ac6fbbfaa493fedc9539bdb0357ca"},{url:"/assets/logos/png/graylog.png",revision:"fac4e76804afb90f7a821befd37f8004"},{url:"/assets/logos/png/grocy.png",revision:"2aca498658bba44fbccab8ebe13fd56a"},{url:"/assets/logos/png/guacamole.png",revision:"7ebc994c7a4fea1f753c5dbbfa3ceb2c"},{url:"/assets/logos/png/handbrake.png",revision:"7b0399cc5417e640619c50a0e76c0014"},{url:"/assets/logos/png/haproxy.png",revision:"60a5f4edd8d519f8760ea80edcda5f6f"},{url:"/assets/logos/png/hasura.png",revision:"d08aaf72b7539a90949ca3e18bbd723d"},{url:"/assets/logos/png/hdhomerun.png",revision:"fa4d4538e6d12b48d7f2539c0ad0b16c"},{url:"/assets/logos/png/headphones.png",revision:"b00d31a4d58081a907ef0f47594b524b"},{url:"/assets/logos/png/healthchecks.png",revision:"d41a4eaf2e1c17ac955a3f87694234e2"},{url:"/assets/logos/png/heimdall.png",revision:"7d824b7017d5c803776b65e3e85d4024"},{url:"/assets/logos/png/home-assistant.png",revision:"6ae38958dc13affb4fe83ffdec7f62da"},{url:"/assets/logos/png/home.png",revision:"9841c7c2f04c447f209b7384bcc1a7b4"},{url:"/assets/logos/png/homebridge.png",revision:"366bac4f464916511362deb99f430b9b"},{url:"/assets/logos/png/homer.png",revision:"b6a3280f35dd53a154fc1bdbad3c1273"},{url:"/assets/logos/png/hp.png",revision:"216f3912fa93502d177711747498a91b"},{url:"/assets/logos/png/hubitat.png",revision:"47328257ee4372ff958cbf7358f16245"},{url:"/assets/logos/png/huginn.png",revision:"0bae982ec4b946af38b5701c4475685c"},{url:"/assets/logos/png/hydra.png",revision:"09a3526e680b4ec10589594aadf5175a"},{url:"/assets/logos/png/icecast.png",revision:"832e7457e131e624c499fc5a594866a6"},{url:"/assets/logos/png/icinga.png",revision:"16fb9085ef0a2f0ee50b9da39e192167"},{url:"/assets/logos/png/idrac.png",revision:"d00192e67034c31e355b095493c1b6ea"},{url:"/assets/logos/png/ilo.png",revision:"f210373b3395f6f083428006b7ef882e"},{url:"/assets/logos/png/infoblox.png",revision:"975ac4f1d5b0c8203616c6a4b521a3df"},{url:"/assets/logos/png/invidious.png",revision:"9ea7462513a126bc70a86d0bb01217d1"},{url:"/assets/logos/png/invoiceninja.png",revision:"1ad8c47ff87eec94abdded5a845cab6a"},{url:"/assets/logos/png/iobroker.png",revision:"338e0a15515e46a85013decb6bb63917"},{url:"/assets/logos/png/irc.png",revision:"b9ab8ecb8b0fe2cf7cdc2a979bbf86b7"},{url:"/assets/logos/png/jackett.png",revision:"55e6f48529116ea33b41ed39aad7484e"},{url:"/assets/logos/png/jaeger.png",revision:"380cc30927d2e2948de8a42e361c7c29"},{url:"/assets/logos/png/jdownloader.png",revision:"95cb534906618d407b61108c918713f5"},{url:"/assets/logos/png/jeedom.png",revision:"23044a7ac6cbcae1894ce08ee4c4af07"},{url:"/assets/logos/png/jellyfin.png",revision:"26f6e2ca5525715ed49910b81b2e7776"},{url:"/assets/logos/png/jenkins.png",revision:"c32ef090a9332f27476cb82b675bf9ef"},{url:"/assets/logos/png/jitsimeet.png",revision:"ac7dcf806132d76874ef661b63add76e"},{url:"/assets/logos/png/joomla.png",revision:"46c2c8b99176b7ef196f7f0340e19734"},{url:"/assets/logos/png/kanboard.png",revision:"d163e9e5a5f3eadc68f8956d01ede126"},{url:"/assets/logos/png/keila.png",revision:"2125c87078313c3bda8b969939c7950b"},{url:"/assets/logos/png/keycloak.png",revision:"ddf45c6bdda576403ab6183c62bddc31"},{url:"/assets/logos/png/kibana.png",revision:"2f08aac858823ea048e40c160413eba8"},{url:"/assets/logos/png/kimai.png",revision:"170104a6f66189c548d3b9eb55694697"},{url:"/assets/logos/png/kitana.png",revision:"360b90e8f4cf6b3bd887ca4a4679ea7c"},{url:"/assets/logos/png/kodi.png",revision:"77e7e94fa1a3af773b54f4cda56039d4"},{url:"/assets/logos/png/komga.png",revision:"f5ba82ca472ebf1452689498a0d4f12f"},{url:"/assets/logos/png/krusader.png",revision:"8285e382ba0065b67fb570f69cdda367"},{url:"/assets/logos/png/kubernetes-dashboard.png",revision:"2782ef657467d5c092ff5202ebfea91f"},{url:"/assets/logos/png/kutt.png",revision:"4659ecee09385b430bc0b9f5f178e9d6"},{url:"/assets/logos/png/lazylibrarian.png",revision:"e3d2d35fcee841098aa376469a200d66"},{url:"/assets/logos/png/leantime.png",revision:"fe507f70ad5de932335a4ebeb42b1f7c"},{url:"/assets/logos/png/lemonldapng.png",revision:"b43e9e0ec8ed18d0b7e51aaf1afefcc4"},{url:"/assets/logos/png/letencrypt.png",revision:"6322417f687cd094db84d6025efc47fa"},{url:"/assets/logos/png/librenms.png",revision:"f448f2f7baf2afb25858d04daf1c12de"},{url:"/assets/logos/png/librephotos.png",revision:"ba878ce724755e661dd9ff77c7b7bb42"},{url:"/assets/logos/png/librespeed.png",revision:"25a1a472b597953cb96e9b97eb1c778f"},{url:"/assets/logos/png/lidarr.png",revision:"bb1685db5ebb3cb414506eafcd6aa2bc"},{url:"/assets/logos/png/listmonk.png",revision:"ec2ec299ee15f2793bbe09b3a817d324"},{url:"/assets/logos/png/logstash.png",revision:"6a8fbd3ebd843db9110d605e3275a265"},{url:"/assets/logos/png/loki.png",revision:"8cd4c2832e45fa99623c1955e7d35661"},{url:"/assets/logos/png/longhorn.png",revision:"9dfcf245c2eeabfbec9184d1bb74d868"},{url:"/assets/logos/png/lychee.png",revision:"fa2153852738f3401d1c72f2e4750d25"},{url:"/assets/logos/png/mailhog.png",revision:"30d2cb929aa5a5c0c63f5b2d019c17fb"},{url:"/assets/logos/png/mainsail.png",revision:"dfd90df531002de287ef8c377f8f117d"},{url:"/assets/logos/png/mak.png",revision:"200c5cc0b57b9fd6497afd4849a0ba5f"},{url:"/assets/logos/png/mattermost.png",revision:"1a1709e4c72e422c1fddf3b851569139"},{url:"/assets/logos/png/mayanedms.png",revision:"2e47a126867e4d78c8493b3cfe5a4f73"},{url:"/assets/logos/png/mcmyadmin.png",revision:"91658fba383b09313d5fc3a90c52d393"},{url:"/assets/logos/png/mealie.png",revision:"36f6270965bff4c4335f586fddf22719"},{url:"/assets/logos/png/mediawiki.png",revision:"fd7b7d263dcb104782a4569343b6d327"},{url:"/assets/logos/png/medusa.png",revision:"06500ce61aa3dedcc681040c7327bdaa"},{url:"/assets/logos/png/meraki.png",revision:"979d2b22b93fe8d0ef449a007dd7c5b4"},{url:"/assets/logos/png/microsoft-todo.png",revision:"3e6d2a53ce2c3865caf258b4df835df9"},{url:"/assets/logos/png/mikrotik.png",revision:"080dba21a28f24acd2a14d279a0b10dc"},{url:"/assets/logos/png/mineos.png",revision:"586de38afa4f478134d040a6d12c3d55"},{url:"/assets/logos/png/miniflux.png",revision:"bf9b8d649ea07c11b6b0d7315138c25c"},{url:"/assets/logos/png/minio.png",revision:"8bef737714dc6a3baa373d185160b3dc"},{url:"/assets/logos/png/molecule.png",revision:"6fbfb2fc41f54b4f22994bf80797ca92"},{url:"/assets/logos/png/mongodb.png",revision:"af9d43ad112333d9a4f1d5ceca4ea0a0"},{url:"/assets/logos/png/monica.png",revision:"7d556589b84e6dbb35ed365311ce158a"},{url:"/assets/logos/png/monit.png",revision:"2f3f844d4bd23f51b12f2cbb4b814f3b"},{url:"/assets/logos/png/motioneye.png",revision:"0a43163146a3df3e1d218af2b2a5d62d"},{url:"/assets/logos/png/mylar.png",revision:"31bafa21d885fa37aff104e8afe1338e"},{url:"/assets/logos/png/n8n.png",revision:"f3c046fcdcde20a4eb0b2b197a9c1cd9"},{url:"/assets/logos/png/nagios.png",revision:"95b66b28d706b92a0babedb2dafd2841"},{url:"/assets/logos/png/navidrome.png",revision:"b4fc3511bbabb7857fd3ef9e98739a89"},{url:"/assets/logos/png/ncore.png",revision:"8c4d29c96ab857e045b97484dbdc0b41"},{url:"/assets/logos/png/nessus.png",revision:"a67879f8a64ee8ff5a350144e4e3b594"},{url:"/assets/logos/png/netatmo.png",revision:"e47f3b0a7598039043de7f4d6b4380f4"},{url:"/assets/logos/png/netboot.png",revision:"36165f86d89f4f1223b0fa4e624d13a1"},{url:"/assets/logos/png/netbootxyz.png",revision:"1c9e0ea952f169f6e23e1cd4e6c23d0b"},{url:"/assets/logos/png/netbox.png",revision:"75597e5416669461a420b0073ce5ad92"},{url:"/assets/logos/png/netdata.png",revision:"7747feff2fdd4b1bef794ff642ae48c0"},{url:"/assets/logos/png/nextcloud.png",revision:"9be3bdaac331cd87543d98e2deb084df"},{url:"/assets/logos/png/nginx.png",revision:"148d45423eee3a4bcf14165b8ac4dda4"},{url:"/assets/logos/png/nginxproxymanager.png",revision:"909b51d89538374d950c8e670d397745"},{url:"/assets/logos/png/nodered.png",revision:"813475d3edd621dc9bf0e4a0a0699c96"},{url:"/assets/logos/png/nowshowing.png",revision:"91bf561823d6a538043b1d3fe2c60747"},{url:"/assets/logos/png/nxfilter.png",revision:"cc24d5475256901bb90f30eb0569f20d"},{url:"/assets/logos/png/nzbget.png",revision:"bfa7e99f77086f326ef7d5a07f31843c"},{url:"/assets/logos/png/nzbhydra.png",revision:"51b55e20ebf41e84496bec685eb0ed2c"},{url:"/assets/logos/png/octoprint.png",revision:"3bc380b4406661be167b996431afbd3b"},{url:"/assets/logos/png/ombi.png",revision:"afe641fc3169176eef10135a0e4a6448"},{url:"/assets/logos/png/omnidb.png",revision:"5683d3c7a95769a6ed2e808483d9e453"},{url:"/assets/logos/png/onlyoffice.png",revision:"54ebec570208eb19aa1b37c136c77d9f"},{url:"/assets/logos/png/openhab.png",revision:"f13ea915a8d04a5419825aed472e9dbf"},{url:"/assets/logos/png/openmaptiler.png",revision:"73a5a446c1daa19316b27701ec501419"},{url:"/assets/logos/png/openmediavault.png",revision:"37b686eb34e4196affb40e34b319608a"},{url:"/assets/logos/png/openspeedtest.png",revision:"00e52a44e0e3d221c0dbfc9584a36623"},{url:"/assets/logos/png/opensprinkler.png",revision:"7d1b762d1f7b9329f4d8201a51b41d53"},{url:"/assets/logos/png/openvpn.png",revision:"fd8fb684f44e08dd07555e6ab1e7a25e"},{url:"/assets/logos/png/openwrt.png",revision:"2dd6f2c89c5a93924f809108f64f4c52"},{url:"/assets/logos/png/opnsense.png",revision:"2a81a39b6785a17607fb2521bfb62477"},{url:"/assets/logos/png/osticket.png",revision:"1756a50c07eece212f23e8e6d4d708e4"},{url:"/assets/logos/png/overseerr.png",revision:"f1d3d73bee0c54b7f62d7ca6b38612ce"},{url:"/assets/logos/png/owncloud.png",revision:"295834f625ae6a511cd781cae3a09ad4"},{url:"/assets/logos/png/ownphotos.png",revision:"b5f905b23d4d3148b9455bf52a1f3f4c"},{url:"/assets/logos/png/pagerduty.png",revision:"b9a0cc6e49ea4259f2925afa88c89760"},{url:"/assets/logos/png/paloaltonetworks.png",revision:"79afa25454eefdeeb830f4dd5469f6ec"},{url:"/assets/logos/png/paperless-ng.png",revision:"6fdd83aab7d8a39a9ad52c76cb6a721c"},{url:"/assets/logos/png/papermerge.png",revision:"6b49e04f13b6623a94edb4995852269a"},{url:"/assets/logos/png/partkeepr.png",revision:"b571f0918404641e81ab430643bf580e"},{url:"/assets/logos/png/peertube.png",revision:"f58e58734aacd31f698a9d04ed4e085e"},{url:"/assets/logos/png/pfsense.png",revision:"69aa1988f13641e547d0cd797bc4cfb9"},{url:"/assets/logos/png/pgadmin.png",revision:"af66c6e613800a0c0429e9dde7f621dc"},{url:"/assets/logos/png/phantombot.png",revision:"ffb2fd452d4561455eab8086a4dd4c11"},{url:"/assets/logos/png/photoprism.png",revision:"9a5d1374093cb45f6aac7d2549f831ee"},{url:"/assets/logos/png/photostructure.png",revision:"24aa9e075072aaaaa5387e155983117d"},{url:"/assets/logos/png/photoview.png",revision:"e9f4f990afb6081f8f03b242106779df"},{url:"/assets/logos/png/phpldapadmin.png",revision:"2240ea148ab9c42c73a7101a7665b858"},{url:"/assets/logos/png/phpmyadmin.png",revision:"82dc5bc76b057ab3bd7623be0c359ca5"},{url:"/assets/logos/png/piaware.png",revision:"1598ef8ab24b66bceb7057159e0d501a"},{url:"/assets/logos/png/pihole.png",revision:"55a143538368d9d5ef19110ae1e6d4c8"},{url:"/assets/logos/png/pingdom.png",revision:"1079fdf44d1e602509795fac0b29bd62"},{url:"/assets/logos/png/piwigo.png",revision:"f45d4423b17ecc9122880c43d207af54"},{url:"/assets/logos/png/plausible.png",revision:"68978b13d1cabb846ff69b7b16334ed9"},{url:"/assets/logos/png/pleroma.png",revision:"2528986e069cac9416abe055189509e5"},{url:"/assets/logos/png/plesk.png",revision:"e31ea82ad13a1cf44fcde7658a47e640"},{url:"/assets/logos/png/plex.png",revision:"06f6593bcf694fd9c4ed5211f98d9d76"},{url:"/assets/logos/png/plexdrive.png",revision:"afa2337d99fdd64c3e11c877569b48b1"},{url:"/assets/logos/png/plexrequests.png",revision:"622af8d0e4adc28b4411d34858cbf787"},{url:"/assets/logos/png/plume.png",revision:"b04a1fe78252a43bae2d19c5ef3ec3ae"},{url:"/assets/logos/png/podify.png",revision:"39cbb2b41bdea202f6aadce80049914e"},{url:"/assets/logos/png/portainer.png",revision:"00770ac6c79e70e2aa6d1b02de7f1828"},{url:"/assets/logos/png/portus.png",revision:"68ebbe25a91dcfd1c7e2142d08607f07"},{url:"/assets/logos/png/postgres.png",revision:"2f6096df551790be53d67766493057ef"},{url:"/assets/logos/png/printer.png",revision:"0a572d1484ead36b33fe506a7173a9ad"},{url:"/assets/logos/png/privatebin.png",revision:"e239f507cc08c4b3d7eb281b74be6bba"},{url:"/assets/logos/png/projectsend.png",revision:"da064a8291d896627617f42da62aad40"},{url:"/assets/logos/png/prometheus.png",revision:"479be4863067b84be0532401db43da6b"},{url:"/assets/logos/png/prowlarr.png",revision:"77f6c6bed8c0241e5f39a9d96f6ec306"},{url:"/assets/logos/png/proxmox.png",revision:"fbb2746aba3fe544546c71e6838064eb"},{url:"/assets/logos/png/prtg.png",revision:"3f25b7e5ca69a26ca93f13864a8cb5f4"},{url:"/assets/logos/png/psitransfer.png",revision:"1846339cf831f7b20fd4a645a1264fb6"},{url:"/assets/logos/png/pterodactyl.png",revision:"3f0bdf7791f155a86c6b647ff0cc0bf0"},{url:"/assets/logos/png/pyload.png",revision:"33e6b8a10f0f17534498ae574b0cdcd5"},{url:"/assets/logos/png/qbittorrent.png",revision:"5d643cf2799c3c6fd7213d8d6bfa31db"},{url:"/assets/logos/png/qnap.png",revision:"4d8c38f4a9bea08cacc0d1a3e04c4bec"},{url:"/assets/logos/png/rabbitmq.png",revision:"f3a1671735556a68d389759863e707fc"},{url:"/assets/logos/png/radarr.png",revision:"99b6f990d87d961e9bbee2b5c31557b9"},{url:"/assets/logos/png/rainloop.png",revision:"52f4889b04e3de8cfa7f18d08b638217"},{url:"/assets/logos/png/rancher.png",revision:"ea89ea4b086fa4ed21ac435ba0e14b2c"},{url:"/assets/logos/png/raneto.png",revision:"706d85f52880f918a23222f79686bf10"},{url:"/assets/logos/png/rclone.png",revision:"bd923990bd500ee30867b4a3b06d60ad"},{url:"/assets/logos/png/readarr.png",revision:"7a8fd6f7ecbb9991e0630d4445798a4e"},{url:"/assets/logos/png/recalbox.png",revision:"a51b05c577515a2fd9bbc6272557bb5f"},{url:"/assets/logos/png/redis.png",revision:"34b0b093d8b1c8dda84a311efc2f7d96"},{url:"/assets/logos/png/requestrr.png",revision:"9a154a4c35e5d01b86f7f129e01ac4d4"},{url:"/assets/logos/png/resiliosync.png",revision:"20937ee2839f6544d17e9a613cd98c6d"},{url:"/assets/logos/png/riot.png",revision:"5a4e05be1a868e39c25f8864164ba1f2"},{url:"/assets/logos/png/rocketchat.png",revision:"7e0e032dcc537c4af077d198db5bc79e"},{url:"/assets/logos/png/rompya.png",revision:"740e0e2c52fbe15cb89bd6c2b2ae0336"},{url:"/assets/logos/png/rook.png",revision:"265e0725b50154ccf2c5751f35a49ea9"},{url:"/assets/logos/png/roundcube.png",revision:"16e4b7313523524ec4dd042aa458f74f"},{url:"/assets/logos/png/router.png",revision:"57081b244ff5c4059e5650ccac6ca3e9"},{url:"/assets/logos/png/rspamd.png",revision:"5a9aeb5743135924f3bc0e5db49e931c"},{url:"/assets/logos/png/rstudioserver.png",revision:"91d73bca7655abc7ee5c205bc807d054"},{url:"/assets/logos/png/rundeck.png",revision:"5a887c8d6c43f1bf30f68c622c2ccc70"},{url:"/assets/logos/png/runeaudio.png",revision:"ec0903123be954ad4b725910270e8998"},{url:"/assets/logos/png/rutorrent.png",revision:"61b6eb2db82917008adc590de11e9425"},{url:"/assets/logos/png/sabnzbd.png",revision:"4c1cef46bf22660d46a93f370f31c5bb"},{url:"/assets/logos/png/scrutiny.png",revision:"e7f3506ea94cf52dfaac60efb815246a"},{url:"/assets/logos/png/seafile.png",revision:"bb8e3e4511b6102544643a893c10b870"},{url:"/assets/logos/png/searxmetasearchengine.png",revision:"956f0852c5ea10266187abd0159913d1"},{url:"/assets/logos/png/serviio.png",revision:"a05d7b7fdc9200959b134ba5aad42975"},{url:"/assets/logos/png/shaarli.png",revision:"4aca86c90ee86e6a9bb4407c250e491b"},{url:"/assets/logos/png/shinobi.png",revision:"3c1e2063611c9293a72a717431a3441b"},{url:"/assets/logos/png/sickbeard.png",revision:"94f1fae3c60e6a16591b574ca8dcf46d"},{url:"/assets/logos/png/sickchill.png",revision:"251e286cdf5f5a0dcc91d1ee1f4f4401"},{url:"/assets/logos/png/sickgear.png",revision:"0849b13545a6697651d277dde2b80a2b"},{url:"/assets/logos/png/slack.png",revision:"c80dc3c52246656365b921a8ce8537d1"},{url:"/assets/logos/png/snibox.png",revision:"9791adbbc57f71fb01c08a619378e4c0"},{url:"/assets/logos/png/sonarqube.png",revision:"9755dfd81b049baea4a2a3a610cbd2bb"},{url:"/assets/logos/png/sonarr.png",revision:"7961539ac0703b64e53ff8af7f2a7bed"},{url:"/assets/logos/png/sourcegraph.png",revision:"20cf06216152830776ac7eb3cbe51d3d"},{url:"/assets/logos/png/splunk.png",revision:"accfd6323430b07a386cda0ec789a829"},{url:"/assets/logos/png/spotweb.png",revision:"21fd505933794c0eeae7cb9b1bbc6a8c"},{url:"/assets/logos/png/squidex.png",revision:"706b606c83f3af62f739a29c631e8877"},{url:"/assets/logos/png/statping.png",revision:"d21c809fd689213f2c97e07838da5d7a"},{url:"/assets/logos/png/strapi.png",revision:"ab26e50f8ee2a398cebd4c5502fc4a7f"},{url:"/assets/logos/png/streama.png",revision:"3133d286c8cbabdb49d0be12b9f39320"},{url:"/assets/logos/png/synclounge.png",revision:"fb75f5fb6f0bf65bd0a3d5732b5b80f1"},{url:"/assets/logos/png/syncthing.png",revision:"026948aa594897229cf7067284bbf461"},{url:"/assets/logos/png/synology.png",revision:"c2d9afe447c8e90117dad21da4f44205"},{url:"/assets/logos/png/taiga.png",revision:"329a2b099d0fe869ff54eee74a9fe35a"},{url:"/assets/logos/png/tandoorrecipes.png",revision:"6da9ebcccdd07f14927ddfec9c45d353"},{url:"/assets/logos/png/tasmoadmin.png",revision:"3a77e0ca6f1c16b9355d2f94beff0688"},{url:"/assets/logos/png/tasmota.png",revision:"b7f0039b5bf961e53470ccd2591add87"},{url:"/assets/logos/png/tautulli.png",revision:"a921847056870333c3c257d7edaec991"},{url:"/assets/logos/png/tdarr.png",revision:"ed47af14becdfbd31b9a6ee14c6cab55"},{url:"/assets/logos/png/teedy.png",revision:"5d735db5cc3e2754dce82df299e20d4b"},{url:"/assets/logos/png/thanos.png",revision:"f48f201443a86f0a39631ee368400897"},{url:"/assets/logos/png/theia.png",revision:"cd072d33635ba8720d80b78e846a919e"},{url:"/assets/logos/png/thelounge.png",revision:"347b3155c43a8d8f160b2e289a6a7509"},{url:"/assets/logos/png/tinytinyrss.png",revision:"aae7eb4c4666eedf3a747f7e11460f8a"},{url:"/assets/logos/png/tplink.png",revision:"4402271d6ab21d3514c7e895b7979c42"},{url:"/assets/logos/png/traccar.png",revision:"27a7751c6f15b613c6560291225f82d4"},{url:"/assets/logos/png/traefik.png",revision:"cfe3ebc1c0e4ae76cc8538014134f8bd"},{url:"/assets/logos/png/transmission.png",revision:"f40804ccabf0fc917045931420bd9b34"},{url:"/assets/logos/png/trilium.png",revision:"b438a270e4144c54ea3a57bcddc5f2dc"},{url:"/assets/logos/png/truenas.png",revision:"5f595532991516a2450b7b290e9daf97"},{url:"/assets/logos/png/tubesync.png",revision:"77ee1041d68a280b2f34a9f6607fa344"},{url:"/assets/logos/png/tvheadend.png",revision:"e8115833df64ce5176ae3635f72d43dd"},{url:"/assets/logos/png/ubooquity.png",revision:"97956d890c069cb175c9063a133d9dc5"},{url:"/assets/logos/png/ultimateguitar.png",revision:"ec2526ef9cfd9b8a66f177e0aa3472f9"},{url:"/assets/logos/png/unifi.png",revision:"dcd04c183a395a462d191dd64f7b5a7d"},{url:"/assets/logos/png/unraid.png",revision:"97423b39d5a3f6dff7954f18eaef435f"},{url:"/assets/logos/png/updog.png",revision:"43ce8c45aeee128eee0d7cb02af788ad"},{url:"/assets/logos/png/urbackup.png",revision:"b42e0b996ad02fe65b04864f38f6f175"},{url:"/assets/logos/png/vault.png",revision:"a27a5812511821c3f8d12359edb15922"},{url:"/assets/logos/png/virtualradarserver.png",revision:"1084d0d4d7bba9e4bdc69c204377bf9e"},{url:"/assets/logos/png/vmware.png",revision:"17e119a9a5d3ce967c156c50cee66831"},{url:"/assets/logos/png/vmwarehorizon.png",revision:"2ad97063664661c5fe51c4aa340b305e"},{url:"/assets/logos/png/volumio.png",revision:"fdd686add6639c7db0ff8365344bca1f"},{url:"/assets/logos/png/wallabag.png",revision:"b148b2d6b440c6d9f47850716f89c1c6"},{url:"/assets/logos/png/wanikani.png",revision:"f3b4dcd2cebabc5a7490b21cfe2abfe0"},{url:"/assets/logos/png/watcher.png",revision:"f00fb3f2ceeb16b8b1c5c30e2cd089ec"},{url:"/assets/logos/png/watchtower.png",revision:"25489d8288bd98798eae19f943b1a80a"},{url:"/assets/logos/png/webdav.png",revision:"2a56535b6641c7359e9bca627ffb9305"},{url:"/assets/logos/png/webmin.png",revision:"cac52c9009210ca462e0754e57b7a6f3"},{url:"/assets/logos/png/webtools.png",revision:"c3d5cd1d62b5c66a2171187e1b3ea7ee"},{url:"/assets/logos/png/wekan.png",revision:"2434757dbf158e5173b00d5b1b6c4580"},{url:"/assets/logos/png/wetty.png",revision:"615c369a39b60c2224a2788a889b264a"},{url:"/assets/logos/png/wggenweb.png",revision:"1c2ac004d72dd3c12e599f7176235535"},{url:"/assets/logos/png/wikijs.png",revision:"0006c20963fef8c9eab2edb798f2d7b1"},{url:"/assets/logos/png/wireguard.png",revision:"e67b13b7c0ef2fd3e92d65322b19493c"},{url:"/assets/logos/png/wordpress.png",revision:"26d6dcb9f44cee799250c600e2e1aac1"},{url:"/assets/logos/png/xigmanas.png",revision:"5adb2df0db01c4da9ea7e6da8904098d"},{url:"/assets/logos/png/xteve.png",revision:"2d44a9a0aa1e52a11d57e42e98550619"},{url:"/assets/logos/png/xwiki.png",revision:"c85ce154601badb3c7f52661bbaab372"},{url:"/assets/logos/png/yacht.png",revision:"a5fc9b9db6ee8ac431abad2fc048ca6b"},{url:"/assets/logos/png/ynab.png",revision:"8f2c72d1ac35893a1926f5d3fc2ca726"},{url:"/assets/logos/png/youtube.png",revision:"40e37d0830607d6a99a8ed83acf8a212"},{url:"/assets/logos/png/youtubedl.png",revision:"fe8480286e7f522eaf8c309ea6b0d4bb"},{url:"/assets/logos/png/zabbix.png",revision:"7516891e8c1ca2697be34bdbb8cb593f"},{url:"/assets/logos/png/zigbee2mqtt.png",revision:"1005094376b56cd0ba45047885d3963a"},{url:"/assets/logos/png/znc.png",revision:"999549d3b16d46304e09a21499038fcd"},{url:"/assets/logos/png/zoneminder.png",revision:"f0ff8dd17abcab894345930983456b27"},{url:"/assets/logos/png/zulip.png",revision:"6bf275a1119faf9b245b8aa2c22e5a72"},{url:"/assets/logos/svg/adguardhome.svg",revision:"b1430ea4786ad9f97e75654d0466873f"},{url:"/assets/logos/svg/adminer.svg",revision:"1a370dc3aca1e1061c6cd66b3f8fe843"},{url:"/assets/logos/svg/bazarr.svg",revision:"21763d7d3c53b8b517d5f4b39e6164d2"},{url:"/assets/logos/svg/caddy.svg",revision:"5eb7f35caa8d3a12b2951232332b2039"},{url:"/assets/logos/svg/calibreweb.svg",revision:"5d2dfc9f30d0e7905ae95463c65f4a70"},{url:"/assets/logos/svg/filebrowser.svg",revision:"dce329b04c8ca506da7e613d02be59bf"},{url:"/assets/logos/svg/grocy.svg",revision:"0dca7db9463f8d354060ab01a05d2033"},{url:"/assets/logos/svg/hedgedoc.svg",revision:"292112b2bd237d832eb0d857499d5cee"},{url:"/assets/logos/svg/home-assistant.svg",revision:"fd46880ccdd689fe48ef53a72ff5bfba"},{url:"/assets/logos/svg/mealie.svg",revision:"c4812c64ce3b2b6303861a1b723d160e"},{url:"/assets/logos/svg/overseerr.svg",revision:"8c3b4ae4d165aea989545409c0a8ea7a"},{url:"/assets/logos/svg/pagerduty.svg",revision:"3313057876304226123dd6eec4b7b199"},{url:"/assets/logos/svg/prowlarr.svg",revision:"dbef9c11d2b2ddafebadc80968ec2f4a"},{url:"/assets/logos/svg/sonarr.svg",revision:"8e48be01c8ce96d5028536ede616cbef"},{url:"/assets/logos/svg/thanos.svg",revision:"bc228a30c720ea14938f58adac65e952"},{url:"/assets/wallpapers/dark.jpg",revision:"105516247ad166730f5a68490eca7674"},{url:"/assets/wallpapers/pic1.jpg",revision:"d1ebf0a9ecc21358faf5b3325e67cbec"},{url:"/assets/wallpapers/pic2.jpg",revision:"85d5cac106110c61d89fe751d100f2bd"},{url:"/assets/wallpapers/splash.jpg",revision:"6ba6f5f64030b59e4d99f15b99fc7edf"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"e17f92026a2dd6080e249614de1bff93"},{url:"/icon-512x512.png",revision:"8417a2caa3916615bb335310cf142166"},{url:"/manifest.json",revision:"6f34c4f42cc3fa39a502ab02c212b018"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:a,state:o})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));