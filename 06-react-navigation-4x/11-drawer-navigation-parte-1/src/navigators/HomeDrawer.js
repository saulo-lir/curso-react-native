import { createDrawerNavigator } from 'react-navigation-drawer'; // npm install react-navigation-drawer
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';

// Criando o drawer navigator
const HomeDrawer = createDrawerNavigator({
    Home:{
        screen:Home
    },
    Perfil:{
        screen:Perfil
    }
},{ // Parâmetros adicionais (e opcionais)
    drawerPosition:'right', // Por padrão, o navigator abre da esquerda. Aqui, podemos mudar esse padrão
    drawerType:'back',// Indica o tipo de abertura do drawer na tela. O padrão e 'front' (por cima da tela)
    drawerWidth:80,
    drawerBackgroundColor:'#FF0000',
    edgeWidth:200, // Área de contato do dedo do usuário usada para puxar o drawer
    hideStatusBar:true,
    overlayColor:1, // Controlar a transparência da tela (escala de 0 a 1)
    contentOptions:{ // Alterar estilo dos itens dentro do menu
        activeTintColor:'#00FF00', // Cor padrão dos itens de menu que estiverem ativos
        activeBackgroundColor:'#0000FF', // Cor padrão do background dos itens de menu que estiverem ativos,
        inactiveTintColor:'#FF0000', // Cor padrão dos itens de menu que estiverem inativos
        itemsContainerStyle:{ // Alterar estilo do container dos itens
            backgroundColor:'#FF0000'
        },
        itemStyle:{ // Alterar estilo do item
            height:100
        },
        labelStyle:{ // Alterar estilo do nome (ou label) do item
            fontSize:19
        }
    }
});

export default HomeDrawer;