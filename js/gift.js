/**
 * Created by Lenovo on 2019-7-31.
 */
$(function () {
    $(".demo1").bootstrapNews({
        newsPerPage: 5,
        autoplay: true,
        pauseOnHover:true,
        direction: 'up',
        newsTickerInterval: 4000,
        onToDo: function () {
            //console.log(this);
        }
    });

    $(".demo2").bootstrapNews({
        newsPerPage: 4,
        autoplay: true,
        pauseOnHover: true,
        navigation: false,
        direction: 'down',
        newsTickerInterval: 2500,
        onToDo: function () {
            //console.log(this);
        }
    });

    $("#demo3").bootstrapNews({
        newsPerPage: 3,
        autoplay: false,

        onToDo: function () {
            //console.log(this);
        }
    });
});