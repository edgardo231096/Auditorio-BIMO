$(document).ready(function(){
    $('#numBox').on('click',function(){
        
        var kb = $("#kb_keypad");
        var offset = $(this).offset();
        var boxHeight = $(this).height();
        var boxWidth = $(this).width();
        kb.css("left", offset.left + (boxWidth-kb.width())/2);        
        kb.css("top", offset.top + boxHeight + 5);    
        var that = $(this);
        var clickHandler = function () {
            var keyVal = this.innerHTML;
            that.val(that.val() + keyVal); 
        };
        var closeEvtHandler = function() {
            kb.css("display", "none");
            $("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click")
        }

        var deleteEvtHandler = function() {
           that.val( 
                that.val().substring(0, that.val().length > 0?that.val().length-1:0)
            );
        }

        kb.is(":visible") ? ( kb.css("display", "none"),$("#kb_keypad .kb_key, #kb_keypad .kb_btn").unbind("click") ) : ( kb.css("display", "block"),$("#kb_keypad .kb_key").click(clickHandler),$(".kb_btn_ok").click(closeEvtHandler),$(".kb_btn_delete").click(deleteEvtHandler) );


           
   });
});