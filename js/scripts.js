function check_if_in_view(){var e=$window.height(),o=$window.scrollTop(),s=o+e/2;$.each($animation_elements,function(){var e=$(this),a=e.outerHeight(),l=+e.offset().top;+(l+a)>=o&&l<=s?($(".big").addClass("left"),$(".big").removeClass("right"),$(".small").addClass("top"),$(".small").removeClass("bottom")):($(".big").addClass("right"),$(".big").removeClass("left"),$(".small").addClass("bottom"),$(".small").removeClass("top"))}),$.each($animation_elements1,function(){var e=$(this),a=e.outerHeight(),l=+e.offset().top;+(l+a)>=o&&l<=s?($(".creatorImage").addClass("to_right"),$(".creatorImage").removeClass("to_left")):($(".creatorImage").addClass("to_left"),$(".creatorImage").removeClass("to_right"))})}var join=$(".mobile-menu-block"),joinLink=$("#button-menu"),indexClick=0;$(function(){joinLink.click(function(e){0===indexClick?(join.addClass("show"),join.removeClass("hide"),indexClick=1,$("#nav-icon4").removeClass("mobile-menu"),$("#nav-icon4").addClass("open"),joinLink.addClass("full_size"),$(".smartphoneMenu").addClass("open-menu")):(join.addClass("hide"),join.removeClass("show"),indexClick=0,$("#nav-icon4").addClass("mobile-menu"),joinLink.removeClass("full_size"),$("#nav-icon4").removeClass("open"),$(".smartphoneMenu").removeClass("open-menu")),e.stopPropagation()})});var $animation_elements=$("#about"),$animation_elements1=$("#creator"),$window=$(window);$window.on("scroll resize",check_if_in_view),$window.trigger("scroll"),$(document).ready(function(){$(".showRightColumn").click(function(){$(".rightHiddenColumn").toggleClass("showIt"),$(".showRightColumn span").toggleClass("leftPosition")}),$(".toFullscreen").click(function(){$(this).parents(".parentBlock").toggleClass("fullscreen"),$(this).parent(".fullscreen_open").children("span").toggleClass("hidden")}),$(".toNormalscreen").click(function(){$(this).parents(".parentBlock").toggleClass("fullscreen"),$(this).parent(".fullscreen_open").children("span").toggleClass("hidden")})}),$(document).ready(function(){$(".galleryImageWrapper").click(function(){$(".galleryImageWrapper").removeClass("show_it"),$(".galleryImageWrapper").removeClass("opacity"),$(this).toggleClass("show_it"),$(".galleryImageWrapper").addClass("opacity"),$(this).toggleClass("opacity"),$(".galleryImageWrapper.show_it").click(function(){$(this).toggleClass("show_it"),$(".galleryImageWrapper").toggleClass("opacity"),$(this).toggleClass("opacity")})})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiY2hlY2tfaWZfaW5fdmlldyIsIndpbmRvd19oZWlnaHQiLCIkd2luZG93IiwiaGVpZ2h0Iiwid2luZG93X3RvcF9wb3NpdGlvbiIsInNjcm9sbFRvcCIsIndpbmRvd19ib3R0b21fcG9zaXRpb24iLCIkIiwiZWFjaCIsIiRhbmltYXRpb25fZWxlbWVudHMiLCIkZWxlbWVudCIsInRoaXMiLCJlbGVtZW50X2hlaWdodCIsIm91dGVySGVpZ2h0IiwiZWxlbWVudF90b3BfcG9zaXRpb24iLCJvZmZzZXQiLCJ0b3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiJGFuaW1hdGlvbl9lbGVtZW50czEiLCJqb2luIiwiam9pbkxpbmsiLCJpbmRleENsaWNrIiwiY2xpY2siLCJuIiwic3RvcFByb3BhZ2F0aW9uIiwid2luZG93Iiwib24iLCJ0cmlnZ2VyIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRvZ2dsZUNsYXNzIiwicGFyZW50cyIsInBhcmVudCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiQUF1QkEsUUFBU0Esb0JBQ0wsR0FBSUMsR0FBZ0JDLFFBQVFDLFNBQ3hCQyxFQUFzQkYsUUFBUUcsWUFDOUJDLEVBQTBCRixFQUFzQkgsRUFBZ0IsQ0FDcEVNLEdBQUVDLEtBQUtDLG9CQUFxQixXQUN4QixHQUFJQyxHQUFXSCxFQUFFSSxNQUNiQyxFQUFpQkYsRUFBU0csY0FDMUJDLEdBQXdCSixFQUFTSyxTQUFTQyxNQUNkRixFQUF1QkYsSUFDdkJSLEdBQXlCVSxHQUF3QlIsR0FDN0VDLEVBQUUsUUFBUVUsU0FBUyxRQUNuQlYsRUFBRSxRQUFRVyxZQUFZLFNBQ3RCWCxFQUFFLFVBQVVVLFNBQVMsT0FDckJWLEVBQUUsVUFBVVcsWUFBWSxZQUV4QlgsRUFBRSxRQUFRVSxTQUFTLFNBQ25CVixFQUFFLFFBQVFXLFlBQVksUUFDdEJYLEVBQUUsVUFBVVUsU0FBUyxVQUNyQlYsRUFBRSxVQUFVVyxZQUFZLFVBR2hDWCxFQUFFQyxLQUFLVyxxQkFBc0IsV0FDekIsR0FBSVQsR0FBV0gsRUFBRUksTUFDYkMsRUFBaUJGLEVBQVNHLGNBQzFCQyxHQUF3QkosRUFBU0ssU0FBU0MsTUFDZEYsRUFBdUJGLElBQ3ZCUixHQUF5QlUsR0FBd0JSLEdBQzdFQyxFQUFFLGlCQUFpQlUsU0FBUyxZQUM1QlYsRUFBRSxpQkFBaUJXLFlBQVksYUFFL0JYLEVBQUUsaUJBQWlCVSxTQUFTLFdBQzVCVixFQUFFLGlCQUFpQlcsWUFBWSxlQXJEM0MsR0FBSUUsTUFBT2IsRUFBRSxzQkFDVGMsU0FBV2QsRUFBRSxnQkFDYmUsV0FBYSxDQUNqQmYsR0FBRSxXQUNFYyxTQUFTRSxNQUFNLFNBQVNDLEdBQ3BCLElBQU1GLFlBQWNGLEtBQUtILFNBQVMsUUFBU0csS0FBS0YsWUFBWSxRQUN4Q0ksV0FBYSxFQUFHZixFQUFFLGNBQWNXLFlBQVksZUFDNUNYLEVBQUUsY0FBY1UsU0FBUyxRQUFTSSxTQUFTSixTQUFTLGFBQ3BEVixFQUFFLG1CQUFtQlUsU0FBUyxlQUFpQkcsS0FBS0gsU0FBUyxRQUM3REcsS0FBS0YsWUFBWSxRQUFTSSxXQUFhLEVBQ3ZDZixFQUFFLGNBQWNVLFNBQVMsZUFDekJJLFNBQVNILFlBQVksYUFDckJYLEVBQUUsY0FBY1csWUFBWSxRQUM1QlgsRUFBRSxtQkFBbUJXLFlBQVksY0FDakNNLEVBQUVDLHFCQUk5QixJQUFJaEIscUJBQXNCRixFQUFFLFVBQ3hCWSxxQkFBdUJaLEVBQUUsWUFDekJMLFFBQVVLLEVBQUVtQixPQXFDaEJ4QixTQUFReUIsR0FBRyxnQkFBaUIzQixrQkFDNUJFLFFBQVEwQixRQUFRLFVBYWhCckIsRUFBRXNCLFVBQVVDLE1BQU8sV0FFbEJ2QixFQUFFLG9CQUFvQmdCLE1BQU0sV0FFM0JoQixFQUFFLHNCQUFzQndCLFlBQVksVUFDcEN4QixFQUFFLHlCQUF5QndCLFlBQVksa0JBR3hDeEIsRUFBRSxpQkFBaUJnQixNQUFNLFdBQ3hCaEIsRUFBRUksTUFBTXFCLFFBQVEsZ0JBQWdCRCxZQUFZLGNBQzVDeEIsRUFBRUksTUFBTXNCLE9BQU8sb0JBQW9CQyxTQUFTLFFBQVFILFlBQVksWUFFOUR4QixFQUFFLG1CQUFtQmdCLE1BQU0sV0FDdkJoQixFQUFFSSxNQUFNcUIsUUFBUSxnQkFBZ0JELFlBQVksY0FDNUN4QixFQUFFSSxNQUFNc0IsT0FBTyxvQkFBb0JDLFNBQVMsUUFBUUgsWUFBWSxjQU14RXhCLEVBQUVzQixVQUFVQyxNQUFPLFdBRWxCdkIsRUFBRSx3QkFBd0JnQixNQUFNLFdBRS9CaEIsRUFBRSx3QkFBd0JXLFlBQVksV0FDdENYLEVBQUUsd0JBQXdCVyxZQUFZLFdBRXRDWCxFQUFFSSxNQUFNb0IsWUFBWSxXQUNwQnhCLEVBQUUsd0JBQXdCVSxTQUFTLFdBQ25DVixFQUFFSSxNQUFNb0IsWUFBWSxXQUVwQnhCLEVBQUUsZ0NBQWdDZ0IsTUFBTSxXQUN2Q2hCLEVBQUVJLE1BQU1vQixZQUFZLFdBQ3BCeEIsRUFBRSx3QkFBd0J3QixZQUFZLFdBQ3RDeEIsRUFBRUksTUFBTW9CLFlBQVkiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgam9pbiA9ICQoXCIubW9iaWxlLW1lbnUtYmxvY2tcIiksXHJcbiAgICBqb2luTGluayA9ICQoXCIjYnV0dG9uLW1lbnVcIiksXHJcbiAgICBpbmRleENsaWNrID0gMDtcclxuJChmdW5jdGlvbigpIHtcclxuICAgIGpvaW5MaW5rLmNsaWNrKGZ1bmN0aW9uKG4pIHtcclxuICAgICAgICAwID09PSBpbmRleENsaWNrID8gKGpvaW4uYWRkQ2xhc3MoXCJzaG93XCIpLCBqb2luLnJlbW92ZUNsYXNzKFwiaGlkZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q2xpY2sgPSAxLCAkKFwiI25hdi1pY29uNFwiKS5yZW1vdmVDbGFzcyhcIm1vYmlsZS1tZW51XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNuYXYtaWNvbjRcIikuYWRkQ2xhc3MoXCJvcGVuXCIpLCBqb2luTGluay5hZGRDbGFzcyhcImZ1bGxfc2l6ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuc21hcnRwaG9uZU1lbnVcIikuYWRkQ2xhc3MoXCJvcGVuLW1lbnVcIikpIDogKGpvaW4uYWRkQ2xhc3MoXCJoaWRlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam9pbi5yZW1vdmVDbGFzcyhcInNob3dcIiksIGluZGV4Q2xpY2sgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNuYXYtaWNvbjRcIikuYWRkQ2xhc3MoXCJtb2JpbGUtbWVudVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5MaW5rLnJlbW92ZUNsYXNzKFwiZnVsbF9zaXplXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNuYXYtaWNvbjRcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5zbWFydHBob25lTWVudVwiKS5yZW1vdmVDbGFzcyhcIm9wZW4tbWVudVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB9KVxyXG59KTtcclxuXHJcbnZhciAkYW5pbWF0aW9uX2VsZW1lbnRzID0gJCgnI2Fib3V0Jyk7XHJcbnZhciAkYW5pbWF0aW9uX2VsZW1lbnRzMSA9ICQoJyNjcmVhdG9yJyk7XHJcbnZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tfaWZfaW5fdmlldygpIHtcclxuICAgIHZhciB3aW5kb3dfaGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcclxuICAgIHZhciB3aW5kb3dfdG9wX3Bvc2l0aW9uID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcclxuICAgIHZhciB3aW5kb3dfYm90dG9tX3Bvc2l0aW9uID0gKHdpbmRvd190b3BfcG9zaXRpb24gKyB3aW5kb3dfaGVpZ2h0IC8gMiApO1xyXG4gICAgJC5lYWNoKCRhbmltYXRpb25fZWxlbWVudHMsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRfaGVpZ2h0ID0gJGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICB2YXIgZWxlbWVudF90b3BfcG9zaXRpb24gPSArJGVsZW1lbnQub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIHZhciBlbGVtZW50X2JvdHRvbV9wb3NpdGlvbiA9ICsoZWxlbWVudF90b3BfcG9zaXRpb24gKyBlbGVtZW50X2hlaWdodCk7XHJcbiAgICAgICAgaWYgKChlbGVtZW50X2JvdHRvbV9wb3NpdGlvbiA+PSB3aW5kb3dfdG9wX3Bvc2l0aW9uKSAmJiAoZWxlbWVudF90b3BfcG9zaXRpb24gPD0gd2luZG93X2JvdHRvbV9wb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgJCgnLmJpZycpLmFkZENsYXNzKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgICQoJy5iaWcnKS5yZW1vdmVDbGFzcygncmlnaHQnKTtcclxuICAgICAgICAgICAgJCgnLnNtYWxsJykuYWRkQ2xhc3MoJ3RvcCcpO1xyXG4gICAgICAgICAgICAkKCcuc21hbGwnKS5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmJpZycpLmFkZENsYXNzKCdyaWdodCcpO1xyXG4gICAgICAgICAgICAkKCcuYmlnJykucmVtb3ZlQ2xhc3MoJ2xlZnQnKTtcclxuICAgICAgICAgICAgJCgnLnNtYWxsJykuYWRkQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgICAgICAgICAkKCcuc21hbGwnKS5yZW1vdmVDbGFzcygndG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkLmVhY2goJGFuaW1hdGlvbl9lbGVtZW50czEsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRfaGVpZ2h0ID0gJGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICB2YXIgZWxlbWVudF90b3BfcG9zaXRpb24gPSArJGVsZW1lbnQub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIHZhciBlbGVtZW50X2JvdHRvbV9wb3NpdGlvbiA9ICsoZWxlbWVudF90b3BfcG9zaXRpb24gKyBlbGVtZW50X2hlaWdodCk7XHJcbiAgICAgICAgaWYgKChlbGVtZW50X2JvdHRvbV9wb3NpdGlvbiA+PSB3aW5kb3dfdG9wX3Bvc2l0aW9uKSAmJiAoZWxlbWVudF90b3BfcG9zaXRpb24gPD0gd2luZG93X2JvdHRvbV9wb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgJCgnLmNyZWF0b3JJbWFnZScpLmFkZENsYXNzKCd0b19yaWdodCcpO1xyXG4gICAgICAgICAgICAkKCcuY3JlYXRvckltYWdlJykucmVtb3ZlQ2xhc3MoJ3RvX2xlZnQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuY3JlYXRvckltYWdlJykuYWRkQ2xhc3MoJ3RvX2xlZnQnKTtcclxuICAgICAgICAgICAgJCgnLmNyZWF0b3JJbWFnZScpLnJlbW92ZUNsYXNzKCd0b19yaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiR3aW5kb3cub24oJ3Njcm9sbCByZXNpemUnLCBjaGVja19pZl9pbl92aWV3KTtcclxuJHdpbmRvdy50cmlnZ2VyKCdzY3JvbGwnKTtcclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyBcdCQoJy5nYWxsZXJ5SW1hZ2VXcmFwcGVyJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuLy8gICAgICAgICAkKCcuZ2FsbGVyeUltYWdlV3JhcHBlcicpLmNzcyhcIm9wYWNpdHlcIiwgXCIuMVwiKTtcclxuLy8gICAgICAgICAkKHRoaXMpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpO1xyXG4vLyAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgICAgJCh0aGlzKS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcclxuLy8gICAgICAgICAkKCcuZ2FsbGVyeUltYWdlV3JhcHBlcicpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdCQoJy5zaG93UmlnaHRDb2x1bW4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHJcblx0XHQkKCcucmlnaHRIaWRkZW5Db2x1bW4nKS50b2dnbGVDbGFzcygnc2hvd0l0Jyk7XHJcblx0XHQkKCcuc2hvd1JpZ2h0Q29sdW1uIHNwYW4nKS50b2dnbGVDbGFzcygnbGVmdFBvc2l0aW9uJyk7XHJcblxyXG5cdH0pO1xyXG5cdCQoJy50b0Z1bGxzY3JlZW4nKS5jbGljayhmdW5jdGlvbiB0b0Z1bGxzY3JlZW4oKSB7XHJcblx0XHQkKHRoaXMpLnBhcmVudHMoJy5wYXJlbnRCbG9jaycpLnRvZ2dsZUNsYXNzKCdmdWxsc2NyZWVuJyk7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgnLmZ1bGxzY3JlZW5fb3BlbicpLmNoaWxkcmVuKCdzcGFuJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xyXG5cdH0pO1xyXG4gICAgJCgnLnRvTm9ybWFsc2NyZWVuJykuY2xpY2soZnVuY3Rpb24gdG9Ob3JtYWxzY3JlZW4oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcucGFyZW50QmxvY2snKS50b2dnbGVDbGFzcygnZnVsbHNjcmVlbicpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCcuZnVsbHNjcmVlbl9vcGVuJykuY2hpbGRyZW4oJ3NwYW4nKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLyAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHRvTm9ybWFsc2NyZWVuLCB0b0Z1bGxzY3JlZW4pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0JCgnLmdhbGxlcnlJbWFnZVdyYXBwZXInKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0JCgnLmdhbGxlcnlJbWFnZVdyYXBwZXInKS5yZW1vdmVDbGFzcygnc2hvd19pdCcpO1xyXG5cdFx0JCgnLmdhbGxlcnlJbWFnZVdyYXBwZXInKS5yZW1vdmVDbGFzcygnb3BhY2l0eScpO1xyXG5cclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ3Nob3dfaXQnKTtcclxuXHRcdCQoJy5nYWxsZXJ5SW1hZ2VXcmFwcGVyJykuYWRkQ2xhc3MoJ29wYWNpdHknKTtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ29wYWNpdHknKTtcclxuXHJcblx0XHQkKCcuZ2FsbGVyeUltYWdlV3JhcHBlci5zaG93X2l0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ3Nob3dfaXQnKTtcclxuXHRcdFx0JCgnLmdhbGxlcnlJbWFnZVdyYXBwZXInKS50b2dnbGVDbGFzcygnb3BhY2l0eScpO1xyXG5cdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGFjaXR5Jyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHJcblx0fSk7XHJcblxyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
