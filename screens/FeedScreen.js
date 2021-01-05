import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ScrollView,  } from 'react-native-gesture-handler';
import  { useState }  from 'react';
import { useSelector, useDispatch } from "react-redux";

import  Feed  from '../components/Feed';
const FeedScreen=()=> {
  const [user, logado] = useSelector((state) => [
    state.auth.user,
    state.auth.logado,
  ]);

  const finaldaLista=(num)=>{
    console.log(num);
  }

  const postFake = [{
    id:"4",
    userPost:{
      id:"",
      userName:"Barney",
      photoURL:"https://vignette.wikia.nocookie.net/simpsons/images/6/68/Barney_Gumble_-_shading.png/revision/latest/scale-to-width-down/250?cb=20180313200146"
    },
    imagemURL:"https://s2.glbimg.com/lL0eM0eKqqCqglxmN5e95cyBzTs=/e.glbimg.com/og/ed/f/original/2019/12/03/beer-filled-mug-on-table-1552630_1.jpg",
    descricao:"Essa ceveja foi demais",
    comentarios:[
      {
        id:"",
        userName:"Barney",
        photoURL:"https://vignette.wikia.nocookie.net/simpsons/images/6/68/Barney_Gumble_-_shading.png/revision/latest/scale-to-width-down/250?cb=20180313200146",
        comentario:"disconcordo"
      },
      {
        id:"",
        userName:"Fred",
        photoURL:"https://vignette.wikia.nocookie.net/simpsons/images/6/68/Barney_Gumble_-_shading.png/revision/latest/scale-to-width-down/250?cb=20180313200146",
        comentario:"concordo"
      },
    ]
    },
    {
      id:"3",
      userPost:{
        id:"",
        userName:"Barney",
        photoURL:"https://vignette.wikia.nocookie.net/simpsons/images/6/68/Barney_Gumble_-_shading.png/revision/latest/scale-to-width-down/250?cb=20180313200146"
      },
      imagemURL:"https://s2.glbimg.com/lL0eM0eKqqCqglxmN5e95cyBzTs=/e.glbimg.com/og/ed/f/original/2019/12/03/beer-filled-mug-on-table-1552630_1.jpg",
      descricao:"Essa ceveja foi demais",
      comentarios:[
        {
          id:"",
          userName:"Barney",
          photoURL:"https://vignette.wikia.nocookie.net/simpsons/images/6/68/Barney_Gumble_-_shading.png/revision/latest/scale-to-width-down/250?cb=20180313200146",
          comentario:"disconcordo"
        },
        {
          id:"",
          userName:"Fred",
          photoURL:"https://vignette.wikia.nocookie.net/simpsons/images/6/68/Barney_Gumble_-_shading.png/revision/latest/scale-to-width-down/250?cb=20180313200146",
          comentario:"concordo"
        },
      ]
    }
  ];

  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <FlatList data={postFake}
          renderItem={({item})=>(<Feed post={item} user={user}/>)}
          keyExtractor={item => item.id}
          onEndReached={finaldaLista}
          />
          
      </ScrollView>
  );
}

FeedScreen.navigationOptions = ()=> {
  return { header: null, }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default FeedScreen;