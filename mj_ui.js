const _0x3cf7e1=_0x27c7;(function(_0x2bfafc,_0x2b74d5){const _0x1b8e93=_0x27c7,_0x591bfe=_0x2bfafc();while(!![]){try{const _0x3d749a=-parseInt(_0x1b8e93(0xda))/0x1+parseInt(_0x1b8e93(0xa5))/0x2*(parseInt(_0x1b8e93(0xd5))/0x3)+-parseInt(_0x1b8e93(0x6c))/0x4+parseInt(_0x1b8e93(0x93))/0x5*(parseInt(_0x1b8e93(0xc0))/0x6)+-parseInt(_0x1b8e93(0xbb))/0x7+parseInt(_0x1b8e93(0xce))/0x8+parseInt(_0x1b8e93(0x98))/0x9*(parseInt(_0x1b8e93(0x78))/0xa);if(_0x3d749a===_0x2b74d5)break;else _0x591bfe['push'](_0x591bfe['shift']());}catch(_0x4c9206){_0x591bfe['push'](_0x591bfe['shift']());}}}(_0x51de,0x7885a));const p=document[_0x3cf7e1(0xb6)]('p');let hand=Array(0xe)['fill']('bk'),dora=['00'],ura_dora=['00'],naki_list=[],dora_count=0x1,cond={'tsumo':![],'riichi':![],'double_riichi':![],'ippatsu':![],'rinshan':![],'chankan':![],'haitei':![],'tenho':![],'honba':0x0},kaze_list=['1z','2z','3z','4z'],zikaze=0x0,bakaze=0x0,naki_type=Array(0x4)[_0x3cf7e1(0xa1)](0x0),naki_type_name=['','ポン','チー','暗カン','カン'],header_area_div,pai_area_div,settings_area_div,pai_numpad=['1m','2m','3m','4m','5m','0m','6m','7m','8m','9m','br','1p','2p','3p','4p','5p','0p','6p','7p','8p','9p','br','1s','2s','3s','4s','5s','0s','6s','7s','8s','9s','br','1z','2z','3z','4z','5z','6z','7z'],pai_numpad_chi=['1m','2m','3m','4m','5m','0m','6m','7m','br','1p','2p','3p','4p','5p','0p','6p','7p','br','1s','2s','3s','4s','5s','0s','6s','7s'],pai_numpad_dora=['1m','2m','3m','4m','5m','0m','6m','7m','8m','9m','br','1p','2p','3p','4p','5p','0p','6p','7p','8p','9p','br','1s','2s','3s','4s','5s','0s','6s','7s','8s','9s','br','1z','2z','3z','4z','5z','6z','7z','00'],cursor_pos=-0x1,all_pai=['1m','2m','3m','4m','5m','0m','6m','7m','8m','9m','1p','2p','3p','4p','5p','0p','6p','7p','8p','9p','1s','2s','3s','4s','5s','0s','6s','7s','8s','9s','1z','2z','3z','4z','5z','6z','7z','00','bk',_0x3cf7e1(0x70),_0x3cf7e1(0x88),'cursor4'],pai_popover_div=flagrate[_0x3cf7e1(0x8f)](_0x3cf7e1(0xae),{'class':'pai_popover'}),pai_popover=flagrate[_0x3cf7e1(0x86)]({'element':pai_popover_div}),pai_popover_hold=![];document['addEventListener']('click',_0x24de3e=>{const _0x30bb71=_0x3cf7e1;if(!_0x24de3e[_0x30bb71(0xa7)][_0x30bb71(0xa4)](_0x30bb71(0xd9))){if(pai_popover&&!pai_popover_hold)pai_popover[_0x30bb71(0xab)]();pai_popover_hold=![];}});for(let pai of all_pai){flagrate[_0x3cf7e1(0x8f)](_0x3cf7e1(0xb9),{'src':_0x3cf7e1(0x76)+pai+_0x3cf7e1(0x96),'class':_0x3cf7e1(0xc1)})[_0x3cf7e1(0xb1)](document[_0x3cf7e1(0xb6)](_0x3cf7e1(0x83)));}function reset_hands(){const _0x253e70=_0x3cf7e1;hand=Array(0xe)[_0x253e70(0xa1)]('bk'),dora=['00'],ura_dora=['00'],naki_list=[],dora_count=0x1,cond={'tsumo':![],'riichi':![],'double_riichi':![],'ippatsu':![],'rinshan':![],'chankan':![],'haitei':![],'tenho':![],'honba':0x0},zikaze=0x0,bakaze=0x0,remove_naki(0x0),remove_naki(0x0),remove_naki(0x0),remove_naki(0x0),refresh_dora(),refresh_pai(),close_pai_numpad();}function refresh_dora(){const _0x155c2b=_0x3cf7e1;cursor_pos>=0xc8&&cursor_pos<0x190&&(cursor_pos%0x64>=dora_count&&(cursor_pos=-0x1,close_pai_numpad()));if(header_area_div)header_area_div[_0x155c2b(0x82)]();header_area_div=flagrate['createElement']('div',{'class':_0x155c2b(0xac)});let _0x56eda8=flagrate[_0x155c2b(0x8f)]('div',{'class':_0x155c2b(0xcf)})[_0x155c2b(0x8b)]({'width':'auto'})[_0x155c2b(0xb1)](header_area_div),_0x4ecadb=flagrate[_0x155c2b(0x8f)]('div',{'class':_0x155c2b(0x91)})[_0x155c2b(0x8b)]({'margin-left':_0x155c2b(0x7a)})[_0x155c2b(0xb1)](_0x56eda8),_0x5d7ff8=flagrate[_0x155c2b(0x8f)]('div',{'class':_0x155c2b(0xb7)})[_0x155c2b(0xb1)](_0x4ecadb);_0x5d7ff8[_0x155c2b(0xb3)]('◁'),_0x5d7ff8['on']('click',function(){dora_count>0x1&&(dora[dora_count]=undefined,ura_dora[dora_count]=undefined,dora_count--),refresh_dora();});let _0xcd2315=flagrate[_0x155c2b(0x8f)](_0x155c2b(0xae),{'class':_0x155c2b(0x85)})[_0x155c2b(0xb1)](_0x4ecadb);_0xcd2315[_0x155c2b(0xb3)](String(dora_count));let _0x6ef383=flagrate['createElement']('div',{'class':_0x155c2b(0x9a)})[_0x155c2b(0xb1)](_0x4ecadb);_0x6ef383[_0x155c2b(0xb3)]('▷'),_0x6ef383['on']('click',function(){dora_count<0x5&&(dora_count++,dora[dora_count]='00',ura_dora[dora_count]='00',refresh_dora());});let _0x209af9=flagrate[_0x155c2b(0x8f)](_0x155c2b(0xae),{'class':'dora_pai_area'})[_0x155c2b(0xb1)](_0x56eda8),_0x846a8f=flagrate['createElement'](_0x155c2b(0xae),{'class':_0x155c2b(0xcd)})['insertTo'](_0x209af9),_0x5f0601=flagrate[_0x155c2b(0x8f)](_0x155c2b(0xae),{'class':_0x155c2b(0xcd)})[_0x155c2b(0xb1)](_0x209af9),_0x24aff0=flagrate[_0x155c2b(0x8f)](_0x155c2b(0xae),{'class':'dora_text'})['insertTo'](_0x846a8f);_0x24aff0['insert'](_0x155c2b(0x9c));let _0x40a2ca=flagrate[_0x155c2b(0x8f)](_0x155c2b(0xae),{'class':_0x155c2b(0x71)})[_0x155c2b(0xb1)](_0x5f0601);_0x40a2ca['insert'](_0x155c2b(0xd2));for(let _0x3738c5=0x0;_0x3738c5<0x5;_0x3738c5++){let _0x1214d9='00';dora[_0x3738c5]!=undefined&&pai_dict[dora[_0x3738c5]]!=undefined&&(_0x1214d9=dora[_0x3738c5]);let _0xfea9c1='00';ura_dora[_0x3738c5]!=undefined&&pai_dict[ura_dora[_0x3738c5]]!=undefined&&(_0xfea9c1=ura_dora[_0x3738c5]);_0x3738c5>0x0&&dora_count<=_0x3738c5&&(_0x1214d9=_0x155c2b(0xa3),_0xfea9c1=_0x155c2b(0xa3));let _0x3c8fb7=flagrate[_0x155c2b(0x8f)](_0x155c2b(0xae),{'class':_0x155c2b(0xb2)})['insertTo'](_0x846a8f),_0x1f486c=flagrate[_0x155c2b(0x8f)](_0x155c2b(0xb9),{'src':_0x155c2b(0x76)+_0x1214d9+_0x155c2b(0x96),'class':'pai_img_dora'})[_0x155c2b(0xb1)](_0x3c8fb7),_0x2f9c38=flagrate['createElement'](_0x155c2b(0xae),{'class':_0x155c2b(0xb2)})['insertTo'](_0x5f0601),_0x4ee722=flagrate[_0x155c2b(0x8f)](_0x155c2b(0xb9),{'src':_0x155c2b(0x76)+_0xfea9c1+_0x155c2b(0x96),'class':'pai_img_dora'})[_0x155c2b(0xb1)](_0x2f9c38);dora_count>_0x3738c5&&(_0x1f486c['on'](_0x155c2b(0xb8),function(){cursor_pos=0xc8+_0x3738c5,refresh_dora(),show_pai_numpad();}),_0x4ee722['on'](_0x155c2b(0xb8),function(){cursor_pos=0x12c+_0x3738c5,refresh_dora(),show_pai_numpad();}));if(cursor_pos-0xc8==_0x3738c5)flagrate[_0x155c2b(0x8f)](_0x155c2b(0xb9),{'src':'img/cursor.png','class':_0x155c2b(0xdb)})[_0x155c2b(0xb1)](_0x3c8fb7);else cursor_pos-0x12c==_0x3738c5&&flagrate[_0x155c2b(0x8f)]('img',{'src':'img/cursor.png','class':_0x155c2b(0xdb)})['insertTo'](_0x2f9c38);}let _0x41bfbf=flagrate[_0x155c2b(0x8f)]('div')['setStyle']({'width':_0x155c2b(0xc3),'flex-grow':'1'})[_0x155c2b(0xb1)](header_area_div),_0x52a9cb=flagrate[_0x155c2b(0x8f)]('div',{'class':_0x155c2b(0x74)})[_0x155c2b(0xb1)](header_area_div);for(let _0x5baed1=0x1;_0x5baed1<0x5;_0x5baed1++){flagrate[_0x155c2b(0xb0)]({'label':naki_type_name[_0x5baed1],'className':_0x155c2b(0x6f),'onSelect':function(){add_naki(_0x5baed1),refresh_pai();}})['insertTo'](_0x52a9cb);}header_area_div[_0x155c2b(0xb1)](document[_0x155c2b(0xb6)](_0x155c2b(0xac)));}function refresh_pai(){const _0x1d2d52=_0x3cf7e1;refresh_dora();if(pai_area_div)pai_area_div[_0x1d2d52(0x82)]();pai_area_div=flagrate[_0x1d2d52(0x8f)](_0x1d2d52(0xae),{'class':'hand'})['setStyle']({'width':'100%','display':_0x1d2d52(0xcb)});for(let _0x395636=0x0;_0x395636<get_hand_length();_0x395636++){let _0x4818a1='bk';hand[_0x395636]!=undefined&&pai_dict[hand[_0x395636]]!=undefined&&(_0x4818a1=hand[_0x395636]);if(_0x395636+0x1==get_hand_length()){let _0x40ddfb=flagrate[_0x1d2d52(0x8f)](_0x1d2d52(0xae),{'class':_0x1d2d52(0x8e)})[_0x1d2d52(0x8b)]({'width':_0x1d2d52(0x6e)})[_0x1d2d52(0xb1)](pai_area_div);flagrate['createElement'](_0x1d2d52(0xb9),{'src':_0x1d2d52(0x89),'class':_0x1d2d52(0x8a)})[_0x1d2d52(0x8b)]({'width':'1vw'})[_0x1d2d52(0xb1)](_0x40ddfb);}let _0x49ead3=flagrate['createElement'](_0x1d2d52(0xae),{'class':_0x1d2d52(0x8e)})['insertTo'](pai_area_div);flagrate[_0x1d2d52(0x8f)](_0x1d2d52(0xb9),{'src':_0x1d2d52(0x76)+_0x4818a1+_0x1d2d52(0x96),'class':_0x1d2d52(0x8a)})['insertTo'](_0x49ead3),_0x49ead3['on'](_0x1d2d52(0xb8),function(){cursor_pos=_0x395636,refresh_pai(),show_pai_numpad();}),cursor_pos==_0x395636&&flagrate[_0x1d2d52(0x8f)](_0x1d2d52(0xb9),{'src':_0x1d2d52(0xcc),'class':_0x1d2d52(0x70)})[_0x1d2d52(0xb1)](_0x49ead3);}let _0x44cbfb=flagrate[_0x1d2d52(0x8f)](_0x1d2d52(0xae))[_0x1d2d52(0x8b)]({'width':_0x1d2d52(0xc3),'class':_0x1d2d52(0x8e),'flex-grow':0x1})[_0x1d2d52(0xb1)](pai_area_div);flagrate['createElement'](_0x1d2d52(0xb9),{'src':_0x1d2d52(0x7b),'height':_0x1d2d52(0x79)})[_0x1d2d52(0xb1)](_0x44cbfb);for(let _0x3428ae=0x0;_0x3428ae<0x4;_0x3428ae++){if(naki_list[_0x3428ae]==undefined)naki_list[_0x3428ae]='bkbkbk';let _0x316b6f=naki_list[_0x3428ae][_0x1d2d52(0xdd)](/.{2}/g),_0x1fe863=0x0;if(naki_type[_0x3428ae]==0x1||naki_type[_0x3428ae]==0x2)_0x1fe863=0x3;if(naki_type[_0x3428ae]==0x3||naki_type[_0x3428ae]==0x4)_0x1fe863=0x4;if(_0x1fe863>0x0){let _0x21d4f4=_0x1fe863*0x5,_0x28c2f3=flagrate['createElement'](_0x1d2d52(0xae),{'class':_0x1d2d52(0xde)})[_0x1d2d52(0x8b)]({'width':_0x1d2d52(0xd1)+_0x21d4f4+_0x1d2d52(0xd6)+_0x21d4f4*0x5+'px)'})[_0x1d2d52(0xb1)](pai_area_div);for(let _0x18e10b=0x0;_0x18e10b<_0x1fe863;_0x18e10b++){let _0x5f1aef=flagrate[_0x1d2d52(0x8f)](_0x1d2d52(0xb9),{'src':_0x1d2d52(0x76)+_0x316b6f[_0x18e10b]+_0x1d2d52(0x96),'class':'pai_img'})[_0x1d2d52(0xb1)](_0x28c2f3);_0x5f1aef['on'](_0x1d2d52(0xb8),function(){cursor_pos=0x64+_0x3428ae,refresh_pai(),show_pai_numpad();});}cursor_pos-0x64==_0x3428ae&&flagrate['createElement']('img',{'src':'img/cursor'+_0x1fe863+_0x1d2d52(0x96),'class':_0x1d2d52(0x70)})[_0x1d2d52(0x8b)]({'width':_0x1d2d52(0xd1)+_0x21d4f4+_0x1d2d52(0xd6)+_0x21d4f4*0x5+_0x1d2d52(0x7e)})[_0x1d2d52(0xb1)](_0x28c2f3);let _0x38806a=flagrate[_0x1d2d52(0x8f)](_0x1d2d52(0xae),{'class':_0x1d2d52(0xc5)})[_0x1d2d52(0xb1)](_0x28c2f3);_0x38806a[_0x1d2d52(0x73)](naki_type_name[naki_type[_0x3428ae]]),_0x38806a['on'](_0x1d2d52(0xb8),function(){remove_naki(_0x3428ae);});}}pai_area_div[_0x1d2d52(0xb1)](document[_0x1d2d52(0xb6)](_0x1d2d52(0x9d)));}function show_pai_numpad(){const _0x2709e7=_0x3cf7e1;if(settings_area_div)settings_area_div['remove']();if(cursor_pos==-0x1){close_pai_numpad();return;}settings_area_div=flagrate[_0x2709e7(0x8f)](_0x2709e7(0xae),{'class':_0x2709e7(0xaf)});let _0x3d98ed=flagrate[_0x2709e7(0x8f)](_0x2709e7(0xae))[_0x2709e7(0xb1)](settings_area_div),_0x4d3f29=flagrate['createElement']('div')['setStyle']({'margin-left':'20px'})[_0x2709e7(0xb1)](settings_area_div),_0x302113=[];_0x302113[0x0]=flagrate['createElement'](_0x2709e7(0xae),{'id':'l1'})[_0x2709e7(0x8b)]({'width':_0x2709e7(0xc2)})[_0x2709e7(0xb1)](_0x3d98ed),_0x302113[0x1]=flagrate['createElement'](_0x2709e7(0xae),{'id':'l2'})[_0x2709e7(0x8b)]({'width':'100%'})[_0x2709e7(0xb1)](_0x3d98ed),_0x302113[0x2]=flagrate[_0x2709e7(0x8f)]('div',{'id':'l3'})[_0x2709e7(0x8b)]({'width':_0x2709e7(0xc2)})[_0x2709e7(0xb1)](_0x3d98ed),_0x302113[0x3]=flagrate['createElement'](_0x2709e7(0xae),{'id':'l4'})[_0x2709e7(0x8b)]({'width':'100%'})[_0x2709e7(0xb1)](_0x3d98ed);let _0x2d6780=0x0,_0x2f5109;if(cursor_pos>=0xc8&&cursor_pos<0x190)_0x2f5109=pai_numpad_dora;else naki_type[cursor_pos-0x64]==0x2?_0x2f5109=pai_numpad_chi:_0x2f5109=pai_numpad;for(let _0x4dbb12=0x0;_0x4dbb12<_0x2f5109[_0x2709e7(0x80)];_0x4dbb12++){if(_0x2f5109[_0x4dbb12]=='br'){_0x2d6780++;continue;}let _0x192734=flagrate[_0x2709e7(0x8f)](_0x2709e7(0xb9),{'src':_0x2709e7(0x76)+_0x2f5109[_0x4dbb12]+_0x2709e7(0x96),'class':'pai\x20pai_img'})[_0x2709e7(0xb1)](_0x302113[_0x2d6780]);_0x192734['on'](_0x2709e7(0xb8),function(){const _0x2bf35b=_0x2709e7;let _0x24d595=_0x2f5109[_0x4dbb12],_0x4e84c6=parseInt(pai_dict[_0x24d595]),_0xe0687=Math[_0x2bf35b(0xbd)](_0x4e84c6%0x64/0x9),_0x264ed0=_0xe0687<0x3?_0x4e84c6%0x64%0x9:-0x1;if(cursor_pos>=0x64&&cursor_pos<0xc8&&(naki_type[cursor_pos-0x64]==0x2&&_0xe0687<0x3&&_0x264ed0>=0x2&&_0x264ed0<=0x4||(naki_type[cursor_pos-0x64]==0x1||naki_type[cursor_pos-0x64]==0x3||naki_type[cursor_pos-0x64]==0x4)&&_0x264ed0==0x4)){pai_popover_hold=!![],pai_popover[_0x2bf35b(0xd8)](_0x192734),pai_popover_div[_0x2bf35b(0xa8)]();let _0x3e1a4f=[];if(naki_type[cursor_pos-0x64]==0x2){let _0x1a0c41='',_0x46e494='',_0x3acc82=_0x4e84c6%0x64;for(let _0x3f4ebf=0x0;_0x3f4ebf<0x3;_0x3f4ebf++){_0x1a0c41+=pai_dict_inv[_0x3acc82+_0x3f4ebf],(_0x3acc82+_0x3f4ebf)%0x9==0x4?_0x46e494+=pai_dict_inv[_0x3acc82+_0x3f4ebf+0x64]:_0x46e494+=pai_dict_inv[_0x3acc82+_0x3f4ebf];}_0x3e1a4f[_0x2bf35b(0x84)](_0x1a0c41),_0x3e1a4f[_0x2bf35b(0x84)](_0x46e494);}else{if(naki_type[cursor_pos-0x64]==0x1){let _0x8a4fe8=_0x4e84c6%0x64;_0x3e1a4f['push'](pai_dict_inv[_0x8a4fe8]+pai_dict_inv[_0x8a4fe8]+pai_dict_inv[_0x8a4fe8]),_0x3e1a4f[_0x2bf35b(0x84)](pai_dict_inv[_0x8a4fe8]+pai_dict_inv[_0x8a4fe8]+pai_dict_inv[_0x8a4fe8+0x64]),_0x3e1a4f[_0x2bf35b(0x84)](pai_dict_inv[_0x8a4fe8]+pai_dict_inv[_0x8a4fe8+0x64]+pai_dict_inv[_0x8a4fe8+0x64]);}else{let _0x52c1ed=_0x4e84c6%0x64,_0xfbd2a6=naki_type[cursor_pos-0x64]==0x3?'00':pai_dict_inv[_0x52c1ed];_0x3e1a4f[_0x2bf35b(0x84)](_0xfbd2a6+pai_dict_inv[_0x52c1ed]+pai_dict_inv[_0x52c1ed]+_0xfbd2a6),_0x3e1a4f[_0x2bf35b(0x84)](_0xfbd2a6+pai_dict_inv[_0x52c1ed]+pai_dict_inv[_0x52c1ed+0x64]+_0xfbd2a6),_0x3e1a4f[_0x2bf35b(0x84)](_0xfbd2a6+pai_dict_inv[_0x52c1ed+0x64]+pai_dict_inv[_0x52c1ed+0x64]+_0xfbd2a6);}}for(let _0x2222d1 of _0x3e1a4f){let _0x30f026=_0x2222d1['match'](/.{2}/g);for(let _0x43eed5 of _0x30f026){let _0x201cca=flagrate[_0x2bf35b(0x8f)](_0x2bf35b(0xb9),{'src':'img/'+_0x43eed5+'.png','class':'pai\x20pai_img'})[_0x2bf35b(0xb1)](pai_popover_div);_0x201cca['on'](_0x2bf35b(0xb8),function(){const _0x11062d=_0x2bf35b;set_naki_on_cursor(_0x2222d1),refresh_pai(),pai_popover[_0x11062d(0xab)]();});}pai_popover_div['insert'](_0x2bf35b(0x87));}}else set_hand_on_cursor(_0x2f5109[_0x4dbb12]);});}let _0xe8e0c6=flagrate[_0x2709e7(0xb0)]({'label':'×','className':_0x2709e7(0x90)})['insertTo'](_0x4d3f29);_0xe8e0c6['on']('click',function(){close_pai_numpad();}),settings_area_div['insertTo'](document[_0x2709e7(0xb6)]('settings'));}function set_hand_on_cursor(_0x3503a0){const _0x388aa9=_0x3cf7e1;let _0x34d9d2=get_hand_length();if(cursor_pos>=0x0&&cursor_pos<_0x34d9d2)hand[cursor_pos]=_0x3503a0,cursor_pos+0x1==_0x34d9d2?naki_type[0x0]!=undefined&&naki_type[0x0]!=0x0?cursor_pos=0x64:cursor_pos=-0x1:cursor_pos++;else{if(cursor_pos>=0x64&&cursor_pos<=0x67){let _0x410899=cursor_pos-0x64;if(naki_type[_0x410899]!=0x0){switch(naki_type[_0x410899]){case 0x1:naki_list[_0x410899]=_0x3503a0+_0x3503a0+_0x3503a0,cursor_pos++;break;case 0x2:let _0x5abb93=parseInt(pai_dict[_0x3503a0]);Math[_0x388aa9(0xbd)](_0x5abb93%0x64/0x9)<0x3&&_0x5abb93%0x64%0x9<0x7&&(naki_list[_0x410899]=pai_dict_inv[_0x5abb93]+pai_dict_inv[_0x5abb93+0x1]+pai_dict_inv[_0x5abb93+0x2],cursor_pos++);break;case 0x3:naki_list[_0x410899]='00'+_0x3503a0+_0x3503a0+'00',cursor_pos++;break;case 0x4:naki_list[_0x410899]=_0x3503a0+_0x3503a0+_0x3503a0+_0x3503a0,cursor_pos++;break;}(naki_type[cursor_pos-0x64]==0x0||naki_type[cursor_pos-0x64]==undefined)&&(cursor_pos=-0x1);}}else{if(cursor_pos>=0xc8&&cursor_pos<0x190){let _0x2b6101=cursor_pos%0x64;cursor_pos>=0xc8&&cursor_pos<0x12c?(_0x2b6101<dora_count&&(dora[_0x2b6101]=_0x3503a0),cursor_pos++,_0x2b6101+0x1>=dora_count&&(cursor_pos=0x12c)):(_0x2b6101<dora_count&&(ura_dora[_0x2b6101]=_0x3503a0),cursor_pos++,_0x2b6101+0x1>=dora_count&&(cursor_pos=-0x1));}}}show_pai_numpad(),refresh_pai(),refresh_dora();}function close_pai_numpad(){cursor_pos=-0x1,refresh_pai(),refresh_dora(),show_settings();}function _0x27c7(_0x24f07f,_0x396b4e){const _0x51de67=_0x51de();return _0x27c7=function(_0x27c761,_0x109e68){_0x27c761=_0x27c761-0x6b;let _0x57f7a0=_0x51de67[_0x27c761];return _0x57f7a0;},_0x27c7(_0x24f07f,_0x396b4e);}function show_settings(){const _0x1a10fc=_0x3cf7e1;if(settings_area_div)settings_area_div[_0x1a10fc(0x82)]();settings_area_div=flagrate['createElement']('div',{'class':_0x1a10fc(0x9e)});let _0xe8c24a=flagrate['createElement'](_0x1a10fc(0xae))[_0x1a10fc(0x8b)]({'display':_0x1a10fc(0xcb),'flex-direction':_0x1a10fc(0x8c)})[_0x1a10fc(0xb1)](settings_area_div),_0x63752=flagrate['createElement'](_0x1a10fc(0xae))[_0x1a10fc(0x8b)]({'text-align':_0x1a10fc(0xc4),'margin-top':_0x1a10fc(0x72)})[_0x1a10fc(0xb1)](settings_area_div),_0x29370a=flagrate[_0x1a10fc(0x8f)](_0x1a10fc(0xae))[_0x1a10fc(0xb1)](_0xe8c24a),_0x22c2f2=flagrate[_0x1a10fc(0x8f)](_0x1a10fc(0xae))['setStyle']({'margin-left':_0x1a10fc(0x95)})[_0x1a10fc(0xb1)](_0xe8c24a),_0x274767=flagrate[_0x1a10fc(0x8f)]('div',{'class':_0x1a10fc(0xc7)})[_0x1a10fc(0xb1)](_0x29370a),_0x315c67=flagrate[_0x1a10fc(0x99)]({'items':[{'label':'ロン'},{'label':'ツモ'}],'selectedIndex':cond[_0x1a10fc(0x7c)]?'1':'0'})[_0x1a10fc(0xb1)](_0x274767);refresh_color(_0x315c67),_0x315c67['on']('check',function(){const _0x50f648=_0x1a10fc;switch(_0x315c67[_0x50f648(0x7f)]){case 0x0:cond[_0x50f648(0x7c)]=![];break;case 0x1:cond[_0x50f648(0x7c)]=!![];break;}refresh_color(this);});let _0x11c10c=flagrate[_0x1a10fc(0x8f)](_0x1a10fc(0xae),{'class':_0x1a10fc(0xc7)})['insertTo'](_0x29370a),_0x2aee0b=flagrate[_0x1a10fc(0x99)]({'items':[{'label':'なし'},{'label':_0x1a10fc(0xe0)},{'label':_0x1a10fc(0x97)}],'selectedIndex':cond[_0x1a10fc(0x75)]?'1':cond[_0x1a10fc(0xaa)]?'2':'0'})[_0x1a10fc(0xb1)](_0x11c10c);refresh_color(_0x2aee0b),_0x2aee0b['on'](_0x1a10fc(0xdf),function(){const _0x6c66be=_0x1a10fc;switch(_0x2aee0b[_0x6c66be(0x7f)]){case 0x0:cond['riichi']=![],cond[_0x6c66be(0xaa)]=![];break;case 0x1:cond[_0x6c66be(0x75)]=!![],cond['double_riichi']=![];break;case 0x2:cond[_0x6c66be(0x75)]=![],cond['double_riichi']=!![];break;}refresh_color(this);});let _0x2b6354=flagrate[_0x1a10fc(0x8f)]('div',{'class':_0x1a10fc(0xd3)})[_0x1a10fc(0xb1)](_0x29370a),_0x747faf=flagrate[_0x1a10fc(0xc9)]({'label':'一発','isChecked':cond[_0x1a10fc(0x8d)]})[_0x1a10fc(0xb1)](_0x2b6354);_0x747faf['on']('change',function(){const _0x12863f=_0x1a10fc;cond[_0x12863f(0x8d)]=_0x747faf[_0x12863f(0x81)](),refresh_color(this);});let _0x5dadfb=flagrate[_0x1a10fc(0xc9)]({'label':_0x1a10fc(0xa9),'isChecked':cond[_0x1a10fc(0x6b)]})[_0x1a10fc(0xb1)](_0x2b6354);_0x5dadfb['on'](_0x1a10fc(0xd4),function(){const _0x392769=_0x1a10fc;cond[_0x392769(0x6b)]=_0x5dadfb[_0x392769(0x81)](),refresh_color(this);});let _0x3ebe4b=flagrate[_0x1a10fc(0xc9)]({'label':'槍槓','isChecked':cond[_0x1a10fc(0xa0)]})[_0x1a10fc(0xb1)](_0x2b6354);_0x3ebe4b['on'](_0x1a10fc(0xd4),function(){const _0x5163bd=_0x1a10fc;cond[_0x5163bd(0xa0)]=_0x3ebe4b['isChecked'](),refresh_color(this);});let _0x48f081=flagrate['createElement'](_0x1a10fc(0xae),{'class':'conditions_checkbox'})[_0x1a10fc(0xb1)](_0x29370a),_0x3b94ed=flagrate[_0x1a10fc(0xc9)]({'label':_0x1a10fc(0xc8),'isChecked':cond[_0x1a10fc(0xba)]})[_0x1a10fc(0xb1)](_0x48f081);_0x3b94ed['on'](_0x1a10fc(0xd4),function(){const _0x5b8e14=_0x1a10fc;cond[_0x5b8e14(0xba)]=_0x3b94ed[_0x5b8e14(0x81)](),refresh_color(this);});let _0x44f386=flagrate[_0x1a10fc(0xc9)]({'label':_0x1a10fc(0x9b),'isChecked':cond[_0x1a10fc(0xbc)]})['insertTo'](_0x48f081);_0x44f386['on'](_0x1a10fc(0xd4),function(){const _0x523da=_0x1a10fc;cond['tenho']=_0x44f386[_0x523da(0x81)](),refresh_color(this);});let _0x9b9da5=flagrate[_0x1a10fc(0x8f)](_0x1a10fc(0xae),{'class':_0x1a10fc(0x91)})[_0x1a10fc(0xb1)](_0x22c2f2),_0x17d259=flagrate[_0x1a10fc(0x8f)](_0x1a10fc(0xae),{'class':'conditions_number_button\x20button_left'})[_0x1a10fc(0xb1)](_0x9b9da5);_0x17d259['insert']('◁'),_0x17d259['on']('click',function(){const _0x2c0e63=_0x1a10fc;cond[_0x2c0e63(0xb5)]>0x0&&(cond['honba']--,_0x3624c8['update'](),_0x3624c8[_0x2c0e63(0xb3)](String(cond[_0x2c0e63(0xb5)])));});let _0x3624c8=flagrate[_0x1a10fc(0x8f)](_0x1a10fc(0xae),{'class':'conditions_number_div'})[_0x1a10fc(0xb1)](_0x9b9da5);_0x3624c8[_0x1a10fc(0xb3)](String(cond['honba']));let _0x632a28=flagrate[_0x1a10fc(0x8f)](_0x1a10fc(0xae),{'class':_0x1a10fc(0x9a)})[_0x1a10fc(0xb1)](_0x9b9da5);_0x632a28['insert']('▷'),_0x632a28['on'](_0x1a10fc(0xb8),function(){const _0x599cd4=_0x1a10fc;cond[_0x599cd4(0xb5)]++,_0x3624c8[_0x599cd4(0xa8)](),_0x3624c8[_0x599cd4(0xb3)](String(cond[_0x599cd4(0xb5)]));}),_0x9b9da5[_0x1a10fc(0xb3)]('本場');let _0x222cc4=flagrate[_0x1a10fc(0x8f)]('div',{'class':'conditions_radios'})[_0x1a10fc(0xb1)](_0x22c2f2);_0x222cc4[_0x1a10fc(0xb3)]('自風');let _0x2b343d=flagrate[_0x1a10fc(0x99)]({'items':[{'label':'東'},{'label':'南'},{'label':'西'},{'label':'北'}],'selectedIndex':String(zikaze)})[_0x1a10fc(0xb1)](_0x222cc4);refresh_color(_0x2b343d),_0x2b343d['on'](_0x1a10fc(0xdf),function(){const _0x411caf=_0x1a10fc;zikaze=parseInt(_0x2b343d[_0x411caf(0x7f)]),refresh_color(this);});let _0x312012=flagrate['createElement']('div',{'class':_0x1a10fc(0xc7)})['insertTo'](_0x22c2f2);_0x312012[_0x1a10fc(0xb3)]('場風');let _0x3754a1=flagrate[_0x1a10fc(0x99)]({'items':[{'label':'東'},{'label':'南'},{'label':'西'},{'label':'北'}],'selectedIndex':String(bakaze)})[_0x1a10fc(0xb1)](_0x312012);refresh_color(_0x3754a1),_0x3754a1['on']('check',function(){bakaze=parseInt(_0x3754a1['selectedIndex']),refresh_color(this);});let _0x3cbec3=flagrate['createButton']({'label':'計算','className':'calc_button'})[_0x1a10fc(0xb1)](_0x63752);_0x3cbec3['on'](_0x1a10fc(0xb8),function(){const _0x12afd1=_0x1a10fc;let _0x19833a=dora['filter'](function(_0x311c52){return _0x311c52!='00';})[_0x12afd1(0x7d)](''),_0x349bb5=ura_dora[_0x12afd1(0x9f)](function(_0x275b72){return _0x275b72!='00';})['join'](''),_0x12f9f0=kaze_list[zikaze],_0x4d5a3f=kaze_list[bakaze],_0x8df9e5=get_hand_length(),_0x463993=hand[_0x12afd1(0x9f)](function(_0x12b91c,_0x3ff723){return _0x3ff723<=_0x8df9e5-0x2&&_0x12b91c!='bk';})[_0x12afd1(0x7d)](''),_0x2e9e12=hand[_0x8df9e5-0x1];if(_0x2e9e12=='bk')_0x2e9e12='';let _0x14a529=naki_list['filter'](function(_0x262167){return _0x262167['indexOf']('bk')==-0x1;}),_0x18dafd=_0x463993[_0x12afd1(0x80)]/0x2+(_0x2e9e12!=''?0x1:0x0)+_0x14a529[_0x12afd1(0x80)]*0x3;if(_0x18dafd!=0xd&&_0x18dafd!=0xe)return;let _0x2e898e=check_hand(new conditions_class(_0x19833a,_0x349bb5,_0x12f9f0,_0x4d5a3f,cond),_0x463993,_0x2e9e12,_0x14a529);_0x2e898e=_0x2e898e['replace'](/\n/g,'<br>');for(let _0x35bf3d of Object[_0x12afd1(0x6d)](pai_dict)){if(_0x35bf3d==''||_0x35bf3d=='00')continue;let _0x484923=RegExp('('+_0x35bf3d+')','g');_0x2e898e=_0x2e898e['replace'](_0x484923,_0x12afd1(0xdc));}let _0x399425=flagrate[_0x12afd1(0x8f)](_0x12afd1(0xae),{'class':_0x12afd1(0xc6)});_0x399425[_0x12afd1(0xb3)](_0x2e898e);let _0x177aae=flagrate['createModal']({'buttons':[{'className':_0x12afd1(0xca),'label':_0x12afd1(0xbe),'color':_0x12afd1(0x92),'onSelect':function(){const _0x19c372=_0x12afd1;_0x177aae[_0x19c372(0xab)]();}}],'element':_0x399425,'disableCloseButton':!![]});_0x177aae['open']();});let _0x46918a=flagrate[_0x1a10fc(0xb0)]({'label':_0x1a10fc(0x77),'className':'reset_button'})[_0x1a10fc(0xb1)](_0x63752);_0x46918a['on'](_0x1a10fc(0xb8),function(){reset_hands();}),settings_area_div[_0x1a10fc(0xb1)](document['getElementById'](_0x1a10fc(0xa6)));}function set_naki_on_cursor(_0x35e7b3){cursor_pos>=0x64&&cursor_pos<=0x67&&(naki_list[cursor_pos-0x64]=_0x35e7b3,cursor_pos++,(naki_type[cursor_pos-0x64]==0x0||naki_type[cursor_pos-0x64]==undefined)&&(cursor_pos=-0x1),show_pai_numpad());}function _0x51de(){const _0x3dd604=['ippatsu','pai','createElement','pai_numpad_close','conditions_number','@blue','5735JQOwPY','childNodes','20px','.png','Wリーチ','1557DFAVUO','createRadios','conditions_number_button\x20button_right','天和/地和','ドラ表示','hand','conditions','filter','chankan','fill','gray','none','closest','667472nqhMAK','settings','target','update','嶺上開花','double_riichi','close','header','checkbox','div','pai_numpad','createButton','insertTo','pai_dora','insert','innerHTML','honba','getElementById','conditions_number_button\x20button_left','click','img','haitei','6681696Iwyuoi','tenho','floor','閉じる','skyblue','4740NOATgy','all_pai','100%','auto','center','naki_name','result_modal','conditions_radios','海底/河底','createCheckbox','modal_close_button','flex','img/cursor.png','dora_pai','97392HwnVEK','dora','radio','max(','裏ドラ表示','conditions_checkbox','change','6gTBFQe','vw,','indexOf','open','.pai_popover','646671hkySUd','cursor_dora','<img\x20src=\x27img/$1.png\x27\x20class=\x27pai_modal\x27>','match','pai\x20naki','check','リーチ','rinshan','3404872vEHMyb','keys','1vw','naki_add_button','cursor','dora_text','10px','insertText','naki_button','riichi','img/','リセット','78630knFyoQ','1px','2em','img/space.png','tsumo','join','px)','selectedIndex','length','isChecked','remove','img_div','push','conditions_number_div','createPopover','<br>','cursor3','img/none.png','pai_img','setStyle','row'];_0x51de=function(){return _0x3dd604;};return _0x51de();}function get_hand_length(){let _0xa19a94=0xe;for(let _0x1bdcee=0x0;_0x1bdcee<0x4;_0x1bdcee++){switch(naki_type[_0x1bdcee]){case 0x1:case 0x2:case 0x3:case 0x4:_0xa19a94-=0x3;break;default:break;}}return _0xa19a94;}function add_naki(_0x2cf40c){for(let _0x2eb103=0x0;_0x2eb103<0x4;_0x2eb103++){if(naki_type[_0x2eb103]==0x0||naki_type[_0x2eb103]==undefined){naki_type[_0x2eb103]=_0x2cf40c;if(_0x2cf40c==0x1||_0x2cf40c==0x2)naki_list[_0x2eb103]='bkbkbk';else(_0x2cf40c==0x3||_0x2cf40c==0x4)&&(naki_list[_0x2eb103]='bkbkbkbk');break;}}let _0xebdb4d=get_hand_length();if(_0xebdb4d<=cursor_pos)cursor_pos=_0xebdb4d-0x1;}function remove_naki(_0x54bbf6){naki_list['splice'](_0x54bbf6,0x1),naki_type['splice'](_0x54bbf6,0x1);cursor_pos%0x64>_0x54bbf6&&cursor_pos--;if(naki_type[0x0]==undefined)cursor_pos=-0x1;if(cursor_pos==-0x1||naki_type[cursor_pos-0x64]==undefined)close_pai_numpad();refresh_pai();}function refresh_color(_0x16756d){const _0x5624cd=_0x3cf7e1;if(_0x16756d[_0x5624cd(0xb4)][_0x5624cd(0xd7)](_0x5624cd(0xd0))!=-0x1){let _0xa6f689=_0x16756d[_0x5624cd(0x7f)];for(let _0x31d2d2=0x0;_0x31d2d2<_0x16756d['childNodes']['length'];_0x31d2d2++){let _0x56b54e=_0x16756d[_0x5624cd(0x94)][_0x31d2d2];_0x56b54e['setStyle']({'background':_0x31d2d2==_0xa6f689?'skyblue':_0x5624cd(0xa2)});}}else _0x16756d[_0x5624cd(0xb4)][_0x5624cd(0xd7)](_0x5624cd(0xad))!=-0x1&&_0x16756d['setStyle']({'background':_0x16756d[_0x5624cd(0x81)]()?_0x5624cd(0xbf):'gray'});}refresh_pai(),show_settings();