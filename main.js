anime({
    targets: 'div.box.red', //what you want to animate
    // translateX: 250,
    // rotate: '1turn',
    // backgroundColor: '#FFF',
    // duration: 800
    //to move down it's translate b/c Y axis..
    //x axis is left and right

    translateY:[
        {value:200, duration: 500},
        {value:0, duration: 5800}
    ],
  });

