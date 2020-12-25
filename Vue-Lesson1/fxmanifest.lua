fx_version 'adamant'
games { 'rdr3', 'gta5' }
ui_page('html/index.html') --THIS IS IMPORTENT
files {
	"html/index.html",
	"html/libraries/axios.min.js",
	"html/script.js",
	"html/assets/*",
	"html/style.css"
}

client_scripts {
	'client.lua',
}

server_scripts {
	'server.lua'
}