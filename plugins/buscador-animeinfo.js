import _0x393473 from'@vitalets/google-translate-api';import{Anime}from'@shineiichijo/marika';const client=new Anime();let handler=async(_0x3b381c,{conn:_0x1da10c,text:_0x398211,usedPrefix:_0x5b7f5a})=>{let _0x4f447f={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x3b381c['sender']['split']('@')[0x0]+':'+_0x3b381c['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};if(!_0x398211)return _0x1da10c['reply'](_0x3b381c['chat'],'*[❗𝐈𝐍𝐅𝐎❗]\x20INGRESE\x20EL\x20NOMBRE\x20DE\x20ALGUN\x20ANIME\x20A\x20BUSCAR*',_0x4f447f,_0x3b381c);await _0x1da10c['reply'](_0x3b381c['chat'],'⌛\x20_Cargando..._\x0a▰▰▰▱▱▱▱▱▱',_0x4f447f,_0x3b381c);try{let _0x2ac037=await client['searchAnime'](_0x398211),_0x12f0de=_0x2ac037['data'][0x0],_0x54a1db=await _0x393473(''+_0x12f0de['background'],{'to':'es','autoCorrect':!![]}),_0x148ab1=await _0x393473(''+_0x12f0de['synopsis'],{'to':'es','autoCorrect':!![]}),_0x5bf82d='⟥⟝⟢⟨\x20*ANIME*\x20⟩⟣⟞⟤\x0a🎀\x20•\x20*Título:*\x20'+_0x12f0de['title']+'\x0a🎋\x20•\x20*Formato:*\x20'+_0x12f0de['type']+'\x0a📈\x20•\x20*Estado:*\x20'+_0x12f0de['status']['toUpperCase']()['replace'](/\_/g,'\x20')+'\x0a🍥\x20•\x20*Episodios\x20totales:*\x20'+_0x12f0de['episodes']+'\x0a🎈\x20•\x20*Duración:\x20'+_0x12f0de['duration']+'*\x0a✨\x20•\x20*Basado\x20en:*\x20'+_0x12f0de['source']['toUpperCase']()+'\x0a💫\x20•\x20*Estrenado:*\x20'+_0x12f0de['aired']['from']+'\x0a🎗\x20•\x20*Finalizado:*\x20'+_0x12f0de['aired']['to']+'\x0a🎐\x20•\x20*Popularidad:*\x20'+_0x12f0de['popularity']+'\x0a🎏\x20•\x20*Favoritos:*\x20'+_0x12f0de['favorites']+'\x0a🎇\x20•\x20*Clasificación:*\x20'+_0x12f0de['rating']+'\x0a🏅\x20•\x20*Rango:*\x20'+_0x12f0de['rank']+'\x0a♦\x20•\x20*Trailer:*\x20'+_0x12f0de['trailer']['url']+'\x0a🌐\x20•\x20*URL:*\x20'+_0x12f0de['url']+'\x0a🎆\x20•\x20*Background:*\x20'+_0x54a1db['text']+'\x0a❄\x20•\x20*Ringkasan:*\x20'+_0x148ab1['text']+'\x0a⬒\x20─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─\x20⬒';_0x1da10c['sendFile'](_0x3b381c['chat'],_0x12f0de['images']['jpg']['image_url'],'error.jpg',_0x5bf82d,_0x3b381c);}catch{throw''+fg;}};handler['command']=/^(anime|animeinfo)$/i;export default handler;