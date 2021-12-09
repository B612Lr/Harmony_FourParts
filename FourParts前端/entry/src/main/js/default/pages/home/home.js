import router from '@system.router';
export default {
    data: {
        mens: [
            {
                i: 0,
                src: '/common/images/event.png',
                srcClick: '/common/images/event_click.png',
                show: true
            },
            {
                i: 1,
                src: '/common/images/add.png',
                srcClick: '/common/images/add_click.png',
                show: false
            },
        ]
    },
    onInit(){
    },
    onShow(){
    },
    change: function (e) {
        console.log("Tab index: " + e.index);
        var mens =  this.mens||[];
        for (let mensKey in mens) {
            mens[mensKey].show=false;
            if ( mens[mensKey].i==e.index) {
                mens[mensKey].show=true;
            }
        }
        this.$set("mens",mens)
    }
}