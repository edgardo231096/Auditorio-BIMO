$(document).ready(function(){
    $('#numBox').on('click',function(){
        
        var kb = $("#kb_keypad");
        var offset = $(this).offset();
        var boxHeight = $(this).height();
        var boxWidth = $(this).width();
        kb.css("left", offset.left + (boxWidth-kb.width())/2);        
        //kb.css();    
        var that = $(this);


        var kbDisplay = function() {
            kb.css("top", $(window).height())
            kb.css("display", "block");
            kb.animate({
                "top": offset.top + boxHeight + 10
            }, 100);
        }

        var kbHide = function() {
            kb.animate({
                "top": $(window).height()
            },100, function() {
                kb.css("display", "none");
            })
        }


        var clickHandler = function () {
            var keyVal = this.innerHTML;
            if (that.val().length<16){
                that.val(that.val() + keyVal); 
            }
        };
        var closeEvtHandler = function() {
            kbHide();
            $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click")
        }

        var deleteEvtHandler = function() {
           that.val( 
                that.val().substring(0, that.val().length > 0?that.val().length-1:0)
            );
        }




        kb.is(":visible") ? ( kbHide(),$("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click") ) : ( kbDisplay(),$("#kb_keypad .kb_key").click(clickHandler),$(".kb_btn_ok").click(closeEvtHandler),$(".kb_btn_delete").click(deleteEvtHandler) );

    }); 
    
    $('#card-number').on('click',function(){
        
        var kb = $("#kb_keypad");
        var offset = $(this).offset();
        var boxHeight = $(this).height();
        var boxWidth = $(this).width();
        kb.css("left", offset.left + (boxWidth-kb.width())/2);        
        //kb.css();    
        var that = $(this);


        var kbDisplay = function() {
            kb.css("top", $(window).height())
            kb.css("display", "block");
            kb.animate({
                "top": offset.top + boxHeight + 10
            }, 100);
        }

        var kbHide = function() {
            kb.animate({
                "top": $(window).height()
            },100, function() {
                kb.css("display", "none");
            })
        }


        var clickHandler = function () {
            var keyVal = this.innerHTML;
            if (that.val().length<16){
                that.val(that.val() + keyVal); 
            }
        };
        var closeEvtHandler = function() {
            kbHide();
            $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click")
        }

        var deleteEvtHandler = function() {
           that.val( 
                that.val().substring(0, that.val().length > 0?that.val().length-1:0)
            );
        }




        kb.is(":visible") ? ( kbHide(),$("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click") ) : ( kbDisplay(),$("#kb_keypad .kb_key").click(clickHandler),$(".kb_btn_ok").click(closeEvtHandler),$(".kb_btn_delete").click(deleteEvtHandler) );

    }); 
    
       $('#card-month').on('click',function(){
        
        var kb = $("#kb_keypad");
        var offset = $(this).offset();
        var boxHeight = $(this).height();
        var boxWidth = $(this).width();
        kb.css("left", offset.left + (boxWidth-kb.width())/2);        
        //kb.css();    
        var that = $(this);


        var kbDisplay = function() {
            kb.css("top", $(window).height())
            kb.css("display", "block");
            kb.animate({
                "top": offset.top + boxHeight + 10
            }, 100);
        }

        var kbHide = function() {
            kb.animate({
                "top": $(window).height()
            },100, function() {
                kb.css("display", "none");
            })
        }


        var clickHandler = function () {
            var keyVal = this.innerHTML;
            if (that.val().length<2){
                that.val(that.val() + keyVal); 
            }
        };
        var closeEvtHandler = function() {
            kbHide();
            $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click")
        }

        var deleteEvtHandler = function() {
           that.val( 
                that.val().substring(0, that.val().length > 0?that.val().length-1:0)
            );
        }




        kb.is(":visible") ? ( kbHide(),$("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click") ) : ( kbDisplay(),$("#kb_keypad .kb_key").click(clickHandler),$(".kb_btn_ok").click(closeEvtHandler),$(".kb_btn_delete").click(deleteEvtHandler) );

    }); 
    
    $('#card-year').on('click',function(){
        
        var kb = $("#kb_keypad");
        var offset = $(this).offset();
        var boxHeight = $(this).height();
        var boxWidth = $(this).width();
        kb.css("left", offset.left + (boxWidth-kb.width())/2);        
        //kb.css();    
        var that = $(this);


        var kbDisplay = function() {
            kb.css("top", $(window).height())
            kb.css("display", "block");
            kb.animate({
                "top": offset.top + boxHeight + 10
            }, 100);
        }

        var kbHide = function() {
            kb.animate({
                "top": $(window).height()
            },100, function() {
                kb.css("display", "none");
            })
        }


        var clickHandler = function () {
            var keyVal = this.innerHTML;
            if (that.val().length<2){
                that.val(that.val() + keyVal); 
            }
        };
        var closeEvtHandler = function() {
            kbHide();
            $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click")
        }

        var deleteEvtHandler = function() {
           that.val( 
                that.val().substring(0, that.val().length > 0?that.val().length-1:0)
            );
        }




        kb.is(":visible") ? ( kbHide(),$("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click") ) : ( kbDisplay(),$("#kb_keypad .kb_key").click(clickHandler),$(".kb_btn_ok").click(closeEvtHandler),$(".kb_btn_delete").click(deleteEvtHandler) );

    }); 
    $('#card-cvc').on('click',function(){
        
        var kb = $("#kb_keypad");
        var offset = $(this).offset();
        var boxHeight = $(this).height();
        var boxWidth = $(this).width();
        kb.css("left", offset.left + (boxWidth-kb.width())/2);        
        //kb.css();    
        var that = $(this);


        var kbDisplay = function() {
            kb.css("top", $(window).height())
            kb.css("display", "block");
            kb.animate({
                "top": offset.top + boxHeight + 10
            }, 100);
        }

        var kbHide = function() {
            kb.animate({
                "top": $(window).height()
            },100, function() {
                kb.css("display", "none");
            })
        }


        var clickHandler = function () {
            var keyVal = this.innerHTML;
            console.log(that.val().length);
            if (that.val().length<4){
                that.val(that.val() + keyVal); 
            }
        };
        var closeEvtHandler = function() {
            kbHide();
            $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click")
        }

        var deleteEvtHandler = function() {
           that.val( 
                that.val().substring(0, that.val().length > 0?that.val().length-1:0)
            );
        }




        kb.is(":visible") ? ( kbHide(),$("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click") ) : ( kbDisplay(),$("#kb_keypad .kb_key").click(clickHandler),$(".kb_btn_ok").click(closeEvtHandler),$(".kb_btn_delete").click(deleteEvtHandler) );

    });
    
     $('#number-card1').on('click',function(){
        
        var kb = $("#kb_keypad");
        var offset = $(this).offset();
        var boxHeight = $(this).height();
        var boxWidth = $(this).width();
        kb.css("left", offset.left + (boxWidth-kb.width())/2);        
        //kb.css();    
        var that = $(this);


        var kbDisplay = function() {
            kb.css("top", $(window).height())
            kb.css("display", "block");
            kb.animate({
                "top": offset.top + boxHeight + 10
            }, 100);
        }

        var kbHide = function() {
            kb.animate({
                "top": $(window).height()
            },100, function() {
                kb.css("display", "none");
            })
        }


        var clickHandler = function () {
            var keyVal = this.innerHTML;
            console.log(that.val().length);
            if (that.val().length<4){
                that.val(that.val() + keyVal); 
            }
        };
        var closeEvtHandler = function() {
            kbHide();
            $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click")
        }

        var deleteEvtHandler = function() {
           that.val( 
                that.val().substring(0, that.val().length > 0?that.val().length-1:0)
            );
        }




        kb.is(":visible") ? ( kbHide(),$("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click") ) : ( kbDisplay(),$("#kb_keypad .kb_key").click(clickHandler),$(".kb_btn_ok").click(closeEvtHandler),$(".kb_btn_delete").click(deleteEvtHandler) );

    });
    
     $('#number-card2').on('click',function(){
        
        var kb = $("#kb_keypad");
        var offset = $(this).offset();
        var boxHeight = $(this).height();
        var boxWidth = $(this).width();
        kb.css("left", offset.left + (boxWidth-kb.width())/2);        
        //kb.css();    
        var that = $(this);


        var kbDisplay = function() {
            kb.css("top", $(window).height())
            kb.css("display", "block");
            kb.animate({
                "top": offset.top + boxHeight + 10
            }, 100);
        }

        var kbHide = function() {
            kb.animate({
                "top": $(window).height()
            },100, function() {
                kb.css("display", "none");
            })
        }


        var clickHandler = function () {
            var keyVal = this.innerHTML;
            console.log(that.val().length);
            if (that.val().length<4){
                that.val(that.val() + keyVal); 
            }
        };
        var closeEvtHandler = function() {
            kbHide();
            $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click")
        }

        var deleteEvtHandler = function() {
           that.val( 
                that.val().substring(0, that.val().length > 0?that.val().length-1:0)
            );
        }




        kb.is(":visible") ? ( kbHide(),$("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click") ) : ( kbDisplay(),$("#kb_keypad .kb_key").click(clickHandler),$(".kb_btn_ok").click(closeEvtHandler),$(".kb_btn_delete").click(deleteEvtHandler) );

    }); 
    
     $('#number-card3').on('click',function(){
        
        var kb = $("#kb_keypad");
        var offset = $(this).offset();
        var boxHeight = $(this).height();
        var boxWidth = $(this).width();
        kb.css("left", offset.left + (boxWidth-kb.width())/2);        
        //kb.css();    
        var that = $(this);


        var kbDisplay = function() {
            kb.css("top", $(window).height())
            kb.css("display", "block");
            kb.animate({
                "top": offset.top + boxHeight + 10
            }, 100);
        }

        var kbHide = function() {
            kb.animate({
                "top": $(window).height()
            },100, function() {
                kb.css("display", "none");
            })
        }


        var clickHandler = function () {
            var keyVal = this.innerHTML;
            console.log(that.val().length);
            if (that.val().length<4){
                that.val(that.val() + keyVal); 
            }
        };
        var closeEvtHandler = function() {
            kbHide();
            $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click")
        }

        var deleteEvtHandler = function() {
           that.val( 
                that.val().substring(0, that.val().length > 0?that.val().length-1:0)
            );
        }




        kb.is(":visible") ? ( kbHide(),$("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click") ) : ( kbDisplay(),$("#kb_keypad .kb_key").click(clickHandler),$(".kb_btn_ok").click(closeEvtHandler),$(".kb_btn_delete").click(deleteEvtHandler) );

    }); 
    
     $('#number-card4').on('click',function(){
        
        var kb = $("#kb_keypad");
        var offset = $(this).offset();
        var boxHeight = $(this).height();
        var boxWidth = $(this).width();
        kb.css("left", offset.left + (boxWidth-kb.width())/2);        
        //kb.css();    
        var that = $(this);


        var kbDisplay = function() {
            kb.css("top", $(window).height())
            kb.css("display", "block");
            kb.animate({
                "top": offset.top + boxHeight + 10
            }, 100);
        }

        var kbHide = function() {
            kb.animate({
                "top": $(window).height()
            },100, function() {
                kb.css("display", "none");
            })
        }


        var clickHandler = function () {
            var keyVal = this.innerHTML;
            console.log(that.val().length);
            if (that.val().length<4){
                that.val(that.val() + keyVal); 
            }
        };
        var closeEvtHandler = function() {
            kbHide();
            $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click")
        }

        var deleteEvtHandler = function() {
           that.val( 
                that.val().substring(0, that.val().length > 0?that.val().length-1:0)
            );
        }




        kb.is(":visible") ? ( kbHide(),$("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click") ) : ( kbDisplay(),$("#kb_keypad .kb_key").click(clickHandler),$(".kb_btn_ok").click(closeEvtHandler),$(".kb_btn_delete").click(deleteEvtHandler) );

    });
});