const _0x55d8da=(function(){let _0x11a922=!![];return function(_0x49e46a,_0x3be838){const _0x306418=_0x11a922?function(){if(_0x3be838){const _0x8fec56=_0x3be838['apply'](_0x49e46a,arguments);return _0x3be838=null,_0x8fec56;}}:function(){};return _0x11a922=![],_0x306418;};}()),_0x49250d=_0x55d8da(this,function(){return _0x49250d['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x49250d)['search']('(((.+)+)+)+$');});_0x49250d();const {SlashCommandBuilder}=require('@discordjs/builders'),{Discord,ActionRowBuilder,ButtonBuilder,EmbedBuilder,StringSelectMenuBuilder,ButtonStyle}=require('discord.js'),fs=require('fs'),yaml=require('js-yaml'),config=yaml['load'](fs['readFileSync']('./config.yml','utf8')),commands=yaml['load'](fs['readFileSync']('./commands.yml','utf8')),moment=require('moment-timezone');module['exports']={'enabled':commands['Ticket']['Panel']['Enabled'],'data':new SlashCommandBuilder()['setName']('panel')['setDescription'](commands['Ticket']['Panel']['Description']),async 'execute'(_0x2fc79b,_0x36a56a){await _0x2fc79b['deferReply']({'ephemeral':!![]});if(!_0x2fc79b['guild']['channels']['cache']['get'](config['TicketSettings']['LogsChannelID']))return console['log']('\x1b[31m%s\x1b[0m','[WARNING]\x20TicketSettings.LogsChannelID\x20is\x20not\x20a\x20valid\x20channel!');if(!_0x2fc79b['member']['permissions']['has']('Administrator'))return _0x2fc79b['editReply']({'content':config['Locale']['NoPermsMessage'],'ephemeral':!![]});if(config['TicketButton1']['ButtonColor']==='Blurple')config['TicketButton1']['ButtonColor']=ButtonStyle['Primary'];if(config['TicketButton1']['ButtonColor']==='Gray')config['TicketButton1']['ButtonColor']=ButtonStyle['Secondary'];if(config['TicketButton1']['ButtonColor']==='Green')config['TicketButton1']['ButtonColor']=ButtonStyle['Success'];if(config['TicketButton1']['ButtonColor']==='Red')config['TicketButton1']['ButtonColor']=ButtonStyle['Danger'];if(config['TicketButton2']['ButtonColor']==='Blurple')config['TicketButton2']['ButtonColor']=ButtonStyle['Primary'];if(config['TicketButton2']['ButtonColor']==='Gray')config['TicketButton2']['ButtonColor']=ButtonStyle['Secondary'];if(config['TicketButton2']['ButtonColor']==='Green')config['TicketButton2']['ButtonColor']=ButtonStyle['Success'];if(config['TicketButton2']['ButtonColor']==='Red')config['TicketButton2']['ButtonColor']=ButtonStyle['Danger'];if(config['TicketButton3']['ButtonColor']==='Blurple')config['TicketButton3']['ButtonColor']=ButtonStyle['Primary'];if(config['TicketButton3']['ButtonColor']==='Gray')config['TicketButton3']['ButtonColor']=ButtonStyle['Secondary'];if(config['TicketButton3']['ButtonColor']==='Green')config['TicketButton3']['ButtonColor']=ButtonStyle['Success'];if(config['TicketButton3']['ButtonColor']==='Red')config['TicketButton3']['ButtonColor']=ButtonStyle['Danger'];if(config['TicketButton4']['ButtonColor']==='Blurple')config['TicketButton4']['ButtonColor']=ButtonStyle['Primary'];if(config['TicketButton4']['ButtonColor']==='Gray')config['TicketButton4']['ButtonColor']=ButtonStyle['Secondary'];if(config['TicketButton4']['ButtonColor']==='Green')config['TicketButton4']['ButtonColor']=ButtonStyle['Success'];if(config['TicketButton4']['ButtonColor']==='Red')config['TicketButton4']['ButtonColor']=ButtonStyle['Danger'];if(config['TicketButton5']['ButtonColor']==='Blurple')config['TicketButton5']['ButtonColor']=ButtonStyle['Primary'];if(config['TicketButton5']['ButtonColor']==='Gray')config['TicketButton5']['ButtonColor']=ButtonStyle['Secondary'];if(config['TicketButton5']['ButtonColor']==='Green')config['TicketButton5']['ButtonColor']=ButtonStyle['Success'];if(config['TicketButton5']['ButtonColor']==='Red')config['TicketButton5']['ButtonColor']=ButtonStyle['Danger'];if(config['TicketButton6']['ButtonColor']==='Blurple')config['TicketButton6']['ButtonColor']=ButtonStyle['Primary'];if(config['TicketButton6']['ButtonColor']==='Gray')config['TicketButton6']['ButtonColor']=ButtonStyle['Secondary'];if(config['TicketButton6']['ButtonColor']==='Green')config['TicketButton6']['ButtonColor']=ButtonStyle['Success'];if(config['TicketButton6']['ButtonColor']==='Red')config['TicketButton6']['ButtonColor']=ButtonStyle['Danger'];if(config['TicketButton7']['ButtonColor']==='Blurple')config['TicketButton7']['ButtonColor']=ButtonStyle['Primary'];if(config['TicketButton7']['ButtonColor']==='Gray')config['TicketButton7']['ButtonColor']=ButtonStyle['Secondary'];if(config['TicketButton7']['ButtonColor']==='Green')config['TicketButton7']['ButtonColor']=ButtonStyle['Success'];if(config['TicketButton7']['ButtonColor']==='Red')config['TicketButton7']['ButtonColor']=ButtonStyle['Danger'];if(config['TicketButton8']['ButtonColor']==='Blurple')config['TicketButton8']['ButtonColor']=ButtonStyle['Primary'];if(config['TicketButton8']['ButtonColor']==='Gray')config['TicketButton8']['ButtonColor']=ButtonStyle['Secondary'];if(config['TicketButton8']['ButtonColor']==='Green')config['TicketButton8']['ButtonColor']=ButtonStyle['Success'];if(config['TicketButton8']['ButtonColor']==='Red')config['TicketButton8']['ButtonColor']=ButtonStyle['Danger'];const _0x230691=new ButtonBuilder();_0x230691['setCustomId']('button1'),_0x230691['setLabel'](config['TicketButton1']['TicketName']),_0x230691['setStyle'](config['TicketButton1']['ButtonColor']);if(config['TicketButton1']['ButtonEmoji'])_0x230691['setEmoji'](config['TicketButton1']['ButtonEmoji']);const _0x3bcba6=new ButtonBuilder();_0x3bcba6['setCustomId']('button2'),_0x3bcba6['setLabel'](config['TicketButton2']['TicketName']),_0x3bcba6['setStyle'](config['TicketButton2']['ButtonColor']);if(config['TicketButton2']['ButtonEmoji'])_0x3bcba6['setEmoji'](config['TicketButton2']['ButtonEmoji']);const _0x18819c=new ButtonBuilder();_0x18819c['setCustomId']('button3'),_0x18819c['setLabel'](config['TicketButton3']['TicketName']),_0x18819c['setStyle'](config['TicketButton3']['ButtonColor']);if(config['TicketButton3']['ButtonEmoji'])_0x18819c['setEmoji'](config['TicketButton3']['ButtonEmoji']);const _0x580041=new ButtonBuilder();_0x580041['setCustomId']('button4'),_0x580041['setLabel'](config['TicketButton4']['TicketName']),_0x580041['setStyle'](config['TicketButton4']['ButtonColor']);if(config['TicketButton4']['ButtonEmoji'])_0x580041['setEmoji'](config['TicketButton4']['ButtonEmoji']);const _0x51d9c1=new ButtonBuilder();_0x51d9c1['setCustomId']('button5'),_0x51d9c1['setLabel'](config['TicketButton5']['TicketName']),_0x51d9c1['setStyle'](config['TicketButton5']['ButtonColor']);if(config['TicketButton5']['ButtonEmoji'])_0x51d9c1['setEmoji'](config['TicketButton5']['ButtonEmoji']);let _0x5307e1='';if(!config['TicketButton2']['Enabled']&&!config['TicketButton3']['Enabled']&&!config['TicketButton4']['Enabled']&&!config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691);if(config['TicketButton2']['Enabled']&&!config['TicketButton3']['Enabled']&&!config['TicketButton4']['Enabled']&&!config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x3bcba6);if(config['TicketButton2']['Enabled']&&config['TicketButton3']['Enabled']&&!config['TicketButton4']['Enabled']&&!config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x3bcba6,_0x18819c);if(config['TicketButton2']['Enabled']&&config['TicketButton3']['Enabled']&&!config['TicketButton4']['Enabled']&&config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x3bcba6,_0x18819c,_0x51d9c1);if(config['TicketButton2']['Enabled']&&config['TicketButton3']['Enabled']&&config['TicketButton4']['Enabled']&&!config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x3bcba6,_0x18819c,_0x580041);if(config['TicketButton2']['Enabled']&&config['TicketButton3']['Enabled']&&config['TicketButton4']['Enabled']&&config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x3bcba6,_0x18819c,_0x580041,_0x51d9c1);if(config['TicketButton2']['Enabled']&&!config['TicketButton3']['Enabled']&&config['TicketButton4']['Enabled']&&config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x3bcba6,_0x580041,_0x51d9c1);if(config['TicketButton2']['Enabled']&&!config['TicketButton3']['Enabled']&&!config['TicketButton4']['Enabled']&&config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x3bcba6,_0x51d9c1);if(config['TicketButton2']['Enabled']&&!config['TicketButton3']['Enabled']&&config['TicketButton4']['Enabled']&&!config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x3bcba6,_0x580041);if(!config['TicketButton2']['Enabled']&&config['TicketButton3']['Enabled']&&config['TicketButton4']['Enabled']&&config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x18819c,_0x580041,_0x51d9c1);if(!config['TicketButton2']['Enabled']&&config['TicketButton3']['Enabled']&&config['TicketButton4']['Enabled']&&!config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x18819c,_0x580041);if(!config['TicketButton2']['Enabled']&&!config['TicketButton3']['Enabled']&&config['TicketButton4']['Enabled']&&!config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x580041);if(!config['TicketButton2']['Enabled']&&!config['TicketButton3']['Enabled']&&config['TicketButton4']['Enabled']&&config['TicketButton5']['Enabled'])_0x5307e1=new ActionRowBuilder()['addComponents'](_0x230691,_0x580041,_0x51d9c1);let _0x2f6bbe='Working\x20hours\x20are\x20disabled!',_0x38f210='Working\x20hours\x20are\x20disabled!';if(config['WorkingHours']['Enabled']){const _0x395b40=/^(\d{1,2}:\d{2})-(\d{1,2}:\d{2})$/,_0x462de3=config['WorkingHours']['WorkingHours']['match'](_0x395b40);!_0x462de3&&console['log']('\x1b[31m%s\x1b[0m','[ERROR]\x20Invalid\x20working\x20hours\x20configuration\x20(format),\x20Contact\x20support\x20and\x20provide\x20your\x20config.yml\x20file.');const _0x4c6747=moment()['tz'](config['WorkingHours']['Timezone']),_0x579b3b=_0x4c6747['format']('YYYY-MM-DD'),_0xa34cab=moment['tz'](_0x579b3b+'\x20'+_0x462de3[0x1],'YYYY-MM-DD\x20H:mm',config['WorkingHours']['Timezone']),_0x102995=moment['tz'](_0x579b3b+'\x20'+_0x462de3[0x2],'YYYY-MM-DD\x20H:mm',config['WorkingHours']['Timezone']);_0x2f6bbe=_0xa34cab['unix'](),_0x38f210=_0x102995['unix']();}let _0x5c414b=config['TicketPanelSettings']['PanelMessage']['replace'](/{workingHours-startTime}/g,'<t:'+_0x2f6bbe+':t>')['replace'](/{workingHours-endTime}/g,'<t:'+_0x38f210+':t>');const _0x1cceb1=new EmbedBuilder()['setTitle'](config['TicketPanelSettings']['PanelTitle'])['setDescription'](_0x5c414b);if(config['TicketPanelSettings']['EmbedColor'])_0x1cceb1['setColor'](config['TicketPanelSettings']['EmbedColor']);if(!config['TicketPanelSettings']['EmbedColor'])_0x1cceb1['setColor'](config['EmbedColors']);if(config['TicketPanelSettings']['PanelImage'])_0x1cceb1['setImage'](config['TicketPanelSettings']['PanelImage']);if(config['TicketPanelSettings']['PanelThumbnail'])_0x1cceb1['setThumbnail'](config['TicketPanelSettings']['PanelThumbnail']);if(config['TicketPanelSettings']['FooterMsg'])_0x1cceb1['setFooter']({'text':''+config['TicketPanelSettings']['FooterMsg']});if(config['TicketPanelSettings']['FooterMsg']&&config['TicketPanelSettings']['FooterIcon'])_0x1cceb1['setFooter']({'text':''+config['TicketPanelSettings']['FooterMsg'],'iconURL':''+config['TicketPanelSettings']['FooterIcon']});if(config['TicketPanelSettings']['FooterTimestamp'])_0x1cceb1['setTimestamp']();const _0x3c5276=[];_0x3c5276['push']({'label':config['TicketButton1']['TicketName'],'value':'button1','description':config['TicketButton1']['Description'],'emoji':config['TicketButton1']['ButtonEmoji']});for(let _0x4137b7=0x1;_0x4137b7<=0x8;_0x4137b7++){const _0x32bafb=config['TicketButton'+_0x4137b7];_0x32bafb['Enabled']&&_0x3c5276['push']({'label':_0x32bafb['TicketName'],'value':'button'+_0x4137b7,'description':_0x32bafb['Description'],'emoji':_0x32bafb['ButtonEmoji']});}_0x3c5276['forEach'](_0x44c312=>{if(!_0x44c312['emoji'])delete _0x44c312['emoji'];if(!_0x44c312['description'])delete _0x44c312['description'];});let _0x2dc9d1=new StringSelectMenuBuilder()['setCustomId']('categorySelect')['setPlaceholder'](config['Locale']['selectCategory'])['setMinValues'](0x1)['setMaxValues'](0x1)['addOptions'](_0x3c5276),_0x55e5e1=new ActionRowBuilder()['addComponents'](_0x2dc9d1);if(config['TicketSettings']['SelectMenu']===![])_0x2fc79b['channel']['send']({'embeds':[_0x1cceb1],'components':[_0x5307e1]});_0x2fc79b['editReply']({'content':'Successfully\x20sent\x20the\x20ticket\x20panel\x20to\x20this\x20channel!','ephemeral':!![]});if(config['TicketSettings']['SelectMenu'])_0x2fc79b['channel']['send']({'embeds':[_0x1cceb1],'components':[_0x55e5e1]})['then'](async function(_0x13d489){_0x36a56a['ticketPanel']['set'](config['GuildID'],_0x3c5276,'selectMenuOptions'),_0x36a56a['ticketPanel']['set'](config['GuildID'],_0x13d489['id'],'msgID');});}};