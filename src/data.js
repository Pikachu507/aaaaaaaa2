export const nav=[['Início','inicio'],['Mais Vendidos','mais-vendidos'],['Nova Época 25/26','nova-epoca'],['Saldos','saldos'],['Ligas','ligas'],['Retro','retro'],['Kit-Criança','kit-crianca'],['Casacos','casacos'],['Conjunto de Treino','conjunto-treino'],['Fatos Treino','fatos-treino'],['Outros','outros']];
export const submenus={'ligas':['Premier League','La Liga','Liga Portugal','Serie A','Bundesliga','Ligue 1'],'conjunto-treino':['Clubes','Seleções','Treino verão'],'fatos-treino':['Clubes','Seleções','Fatos completos'],'outros':['Seleções','Acessórios','Novidades']};
export const euro=n=>Number(n||0).toLocaleString('pt-PT',{style:'currency',currency:'EUR'});
export const demoProducts=[
{id:'demo-1',name:'Camisola Branca — Edição 25/26',team:'Madrid',category:'ligas',league:'La Liga',price:39.9,old_price:null,stock:12,badge:'Novo',featured:true,kind:'shirt',color:'#f6f4ed',accent:'#d8b768',image_url:''},
{id:'demo-2',name:'Camisola Azul e Grená — 25/26',team:'Barcelona',category:'ligas',league:'La Liga',price:39.9,old_price:null,stock:8,badge:'Popular',featured:true,kind:'shirt',color:'#193878',accent:'#9d203e',image_url:''},
{id:'demo-3',name:'Camisola Vermelha — Seleção',team:'Portugal',category:'outros',league:'Seleções',price:39.9,old_price:null,stock:16,badge:'Novo',featured:true,kind:'shirt',color:'#bb1628',accent:'#0d6b45',image_url:''},
{id:'demo-4',name:'Camisola Vermelha — 25/26',team:'Liverpool',category:'ligas',league:'Premier League',price:39.9,old_price:null,stock:9,badge:'Novo',featured:false,kind:'shirt',color:'#c3192b',accent:'#f7f4ef',image_url:''},
{id:'demo-5',name:'Camisola Azul Céu — 25/26',team:'Manchester',category:'ligas',league:'Premier League',price:39.9,old_price:null,stock:15,badge:'Novo',featured:false,kind:'shirt',color:'#8ac5eb',accent:'#ffffff',image_url:''},
{id:'demo-6',name:'Camisola Retro — Edição Clássica',team:'Clássicos',category:'retro',league:'Retro',price:29.9,old_price:39.9,stock:5,badge:'Saldo',featured:false,kind:'shirt',color:'#171717',accent:'#d6b763',image_url:''},
{id:'demo-7',name:'Kit Criança — Vermelho',team:'Criança',category:'kit-crianca',league:'Criança',price:34.9,old_price:null,stock:7,badge:'Novo',featured:false,kind:'shirt',color:'#c62232',accent:'#ffffff',image_url:''},
{id:'demo-8',name:'Casaco de Treino — Preto',team:'Treino',category:'casacos',league:'Casacos',price:49.9,old_price:null,stock:4,badge:'Novo',featured:false,kind:'jacket',color:'#242424',accent:'#d5b765',image_url:''},
{id:'demo-9',name:'Conjunto de Treino — Azul',team:'Treino',category:'conjunto-treino',league:'Treino',price:44.9,old_price:null,stock:6,badge:'Novo',featured:false,kind:'jacket',color:'#1d407c',accent:'#ffffff',image_url:''},
{id:'demo-10',name:'Fato de Treino — Cinzento',team:'Treino',category:'fatos-treino',league:'Treino',price:59.9,old_price:null,stock:6,badge:'Novo',featured:false,kind:'jacket',color:'#696d73',accent:'#171717',image_url:''}
];
