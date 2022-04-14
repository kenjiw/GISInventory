////////////////////////////// Top Page //////////////////////////////


// hover function on User Login

$("#userLoginBox").hover(function(){
                                     $(this).css("cursor", "pointer");
                                     $("#userLogin").css("color", "#404040");
                                     $("#loginLogo").css("background", "url('images/key_hover.svg') no-repeat");
                                                                   
		                                }, function(){
                                                  $("#userLogin").css("color", "#666666");
                                                  $("#loginLogo").css("background", "url('images/key.svg') no-repeat");
                                                }
		                     );


// hover function for show/hide Tag Clouds (Top Page)
		       
$("#tagSwitch").hover(function(){
                                  $(this).css("cursor", "pointer");
                                  $("#showTag").css("color", "#404040");
                                  $("#tagIcon").css("background", "url('images/tags_hover.svg') no-repeat");
                                  $("#tag_underline").css("border-top", "1px solid #404040");                               
                                     
                                 },function(){
                                              $("#showTag").css("color", "#666666");
                                              $("#tagIcon").css("background", "url('images/tags.svg') no-repeat");
                                              $("#tag_underline").css("border-top", "1px solid #666666");
                                              }
                      );


// click function on show/hide Tag Clouds (Top Page)

$("#tagSwitch").click(function(){
                                 if (!$(this).hasClass("active")) {
                                                                    $(this).addClass("active");
                                                                    $("#tagIcon").css("background", "url('images/tags_hover.svg') no-repeat");
                                                                    $("#showTag").html("&nbsp;hide");
                                                                    $("#tagCloudbox").css("display", "block");
                                                                    $("#tag_underline").css("border-top", "1px solid #404040").animate({ width: "280px"}, 300 );
                                                                   }
                                 else {
                                       $(this).removeClass("active");
                                       $("#tagIcon").css("background", "url('images/tags.svg') no-repeat");
                                       $("#showTag").html("&nbsp;Show popular tags");
                                       $("#tagCloudbox").css("display", "none");
                                       $("#tag_underline").css("border-top", "1px solid #66666").animate({ width: "150px"}, 300 ); 
                                      }        
                      });


////////////////////////////// Result Page //////////////////////////////

// hover function on User Login (Result page) 

$("#userLoginBox_result").hover(function(){
                                           $(this).css("cursor", "pointer");
                                           $("#userLogin_result").css("color", "rgb(89, 184, 230)");
                                           $("#loginLogo_result").css("background", "url('images/key_result_hover.svg') no-repeat");
                                                                    
                                           }, function(){
                                                         $("#userLogin_result").css("color", "#ffffff");
                                                         $("#loginLogo_result").css("background", "url('images/key_result.svg') no-repeat");
                                                        }
                                );

// hover function on open/close button (Result page) 

$("#openCloseBtn_filter").hover(function(){
                                           if ($(this).hasClass("closeSwitch")) {
                                                                                 $(this).css("cursor", "pointer");
                                                                                 $(this).css("background", "url('images/close_hover.svg') no-repeat");
                                                                                 $(this).css("background-size", "12px 12px");
                                                                                }
                                                                                
                                           else if ($(this).hasClass("openSwitch")) {
                                                                                     $(this).css("cursor", "pointer");
                                                                                     $(this).css("background", "url('images/open_hover.svg') no-repeat");
                                                                                     $(this).css("background-size", "15px 15px");
                                                                                    }
                                           }, function(){
                                                         if ($(this).hasClass("closeSwitch")) {
                                                                                               $(this).css("background", "url('images/close.svg') no-repeat");
                                                                                               $(this).css("background-size", "12px 12px");
                                                                                              }
                                                         else if ($(this).hasClass("openSwitch")) {
                                                                                                   $(this).css("background", "url('images/open.svg') no-repeat");
                                                                                                   $(this).css("background-size", "15px 15px");
                                                                                                  }
                               });
                               

// click function on open/close button (Result page) 

$("#openCloseBtn_filter").click(function(){
                                           if ($("#filteringPanel").hasClass("active")) {
                                                                                         $("#filteringPanel").removeClass("active");                   
                                                                                         $(this).addClass("openSwitch");
                                                                                         $(this).removeClass("closeSwitch"); 
                                                                                         $("#filteringPanel").animate({ left: "-255px"}, 300 );
                                                                                         $("#mainPanel").animate({ marginLeft: "45px"}, 300 );
                                                                                         $("#mainPanel").animate({ width: "calc(100%-45px)"}, 300 );
                                                                                         $(function() {
                                                                                                       setTimeout (function(){
                                                                                                                              $("#openCloseBtn_filter").css("background", "url('images/open.svg') no-repeat");
                                                                                                                              $("#openCloseBtn_filter").css("background-size", "15px 15px");
                                                                                                                             }, 250);
                                                                                                      });                                                                                   
                                                                                         console.log("not active");
                                                                                        }
                                           else {
                                                 $("#filteringPanel").addClass("active");
                                                 $(this).removeClass("openSwitch");
                                                 $(this).addClass("closeSwitch"); 
                                                 $("#filteringPanel").animate({ left: "0px"}, 300 );
                                                 $("#mainPanel").animate({ marginLeft: "300px"}, 300 );
                                                 $("#mainPanel").animate({ width: "calc(100%-300px)"}, 300 );
                                                 $(function(){
                                                              setTimeout (function(){
                                                                                     $(this).css("background", "url('images/close.svg') no-repeat");
                                                                                     $(this).css("background-size", "12px 12px");
                                                                                    }, 250);
                                                             });
                                                 console.log("active");
                                                }
                                           });            


// hover function for show/hide Tag Clouds (Result Page: filtering panel)                                                   
                               
$("#tagSwitch_filter").hover(function(){
                                        $(this).css("cursor", "pointer");
                                        $("#showTag_filter").css("color", "#404040");
                                        $("#tagIcon_filter").css("background", "url('images/tags_hover.svg') no-repeat");
                                        $("#tag_underline_filter").css("border-top", "1px solid #404040");
                                       }, function(){
                                                     $("#showTag_filter").css("color", "#666666");
                                                     $("#tagIcon_filter").css("background", "url('images/tags.svg') no-repeat");
                                                     $("#tag_underline_filter").css("border-top", "1px solid #666666");
                                                    }
                             );
                         

// click function on show/hide Tag Clouds (Result Page: filtering panel) 

$("#tagSwitch_filter").click(function(){
                                        if (!$(this).hasClass("active")){
                                                                         $(this).addClass("active");
                                                                         $("#tagIcon_filter").css("background", "url('images/tags_hover.svg') no-repeat");
                                                                         $("#showTag_filter").html("&nbsp;hide");
                                                                         $("#tagCloudbox_filter").css("display", "block");
                                                                         $("#tag_underline_filter").css("border-top", "1px solid #404040").animate({ width: "230px"}, 200 );                
                                                                        }           
                                        else {
                                              $(this).removeClass("active");
                                              $("#tagIcon_filter").css("background", "url('images/tags.svg') no-repeat");
                                              $("#showTag_filter").html("&nbsp;Show popular tags");
                                              $("#tagCloudbox_filter").css("display", "none");
                                              $("#tag_underline_filter").css("border-top", "1px solid #66666").animate({ width: "150px"}, 200 );
                                              }
                                        });


$("#modalCloseBtn").hover(function(){ 
                                      $(this).css("cursor", "pointer");
                                      $(this).css("background", "url('images/close_hover.svg') no-repeat");
                                      $(this).css("background-size", "12px 12px");
                                    }, function(){
                                                   $(this).css("background", "url('images/close.svg') no-repeat");
                                                   $(this).css("background-size", "12px 12px");     
                                                  }                                               
                          );



////////////////////////////// Check Box in the Sidebar //////////////////////////////

$(document).ready(function() {
                            	// Set variables of selectors
                            	var $tgt_parent = $("input.check-parent");
                            	var $tgt_child = $("input.check-child");
	
                            	// Parent checkbox
                            	$tgt_parent.click(function(){
                            	                             $(this).parents("div.parent").find('ul li input.check-child').prop('checked', this.checked);	
	                                                        });
	
                            	// Children check box
                            	$tgt_child.click(function(){                         	
                            		                          var checkNum1 = $(this).parents('ul').find('li input.check-child:checked').length;
                            		                          var listNum1 = $(this).parents('ul').find('li').length;                
                                                          if(checkNum1 == listNum1){
                                                      			                        $(this).parents("div.parent").find("input.check-parent").prop('checked', true);
                                                      		                         }
                                                      		else {
                                                      			    $(this).parents("div.parent").find("input.check-parent").prop('checked', false);
                                                      		     }
                            		
                            	                            });
                               });

//Check parent checkboxes when their children checkboxes are all checked
$(document).ready(function() {
                              var checkNum2 = $("input.check-child:checked").parents('ul').find('li input.check-child:checked').length;
                            	var listNum2 = $("input.check-child:checked").parents('ul').find('li').length;
                            	if(checkNum2 == listNum2){                        	
                            		                        $("input.check-child:checked").parents("div.parent").find("input.check-parent:checkbox").prop('checked',true);	
                            	                         }
                            	
                             });


////////////////////////////// Check Box in the Sidebar //////////////////////////////

// Close side panel for filtring when users change window size
$(window).resize(function(){  
                            var w = $(window).width();
                            var sm = 768;

                            if (w >= sm) {
                                          // console.log("oepn filtering panel");
                                          $('#filteringPanel').addClass("active");
                                          $("#openCloseBtn_filter").removeClass("openSwitch");
                                          $("#openCloseBtn_filter").addClass("closeSwitch");
                                          $("#filteringPanel").animate({ left: "0px"}, 10 );
                                          $("#mainPanel").animate({ marginLeft: "300px"}, 10 );
                                          $("#mainPanel").animate({ width: "calc(100%-300px)"}, 10);                                       
                                          $("#openCloseBtn_filter").css("background", "url('images/close.svg') no-repeat");
                                          $("#openCloseBtn_filter").css("background-size", "12px 12px");                                                                                  
                                          // console.log("active");   
                                         }                            
                             else {
                                   $("#filteringPanel").removeClass("active");
                                   $("#openCloseBtn_filter").addClass("openSwitch");
                                   $("#openCloseBtn_filter").removeClass("closeSwitch");                              
                                   $("#filteringPanel").animate({ left: "-255px"}, 10 );
                                   $("#mainPanel").animate({ marginLeft: "45px"}, 10 );                              
                                   $("#mainPanel").animate({ width: "calc(100%-45px)"}, 10);                                                                                       
                                   $("#openCloseBtn_filter").css("background", "url('images/open.svg') no-repeat");
                                   $("#openCloseBtn_filter").css("background-size", "15px 15px");                                                                      
                                   // console.log("not active");                            
                                  }                         
                            });

// Close side panel for filtring if screen size is small when users load page

$(function(){
             var w = $(window).width();
             var sm = 768;

             if (w >= sm) {
                           // console.log("oepn filtering panel");
                           $('#filteringPanel').addClass("active");
                           $('#openCloseBtn_filter').removeClass("openSwitch");
                           $('#openCloseBtn_filter').addClass("closeSwitch");                                        
                           $("#filteringPanel").animate({ left: "0px"}, 100 );                                        
                           $("#mainPanel").animate({ marginLeft: "300px"}, 100 );                                        
                           $("#mainPanel").animate({ width: "calc(100%-300px)"}, 100 );                                        
                           // $(function(){ setTimeout (function(){
                                                                $("#openCloseBtn_filter").css("background", "url('images/close.svg') no-repeat");
                                                                $("#openCloseBtn_filter").css("background-size", "12px 12px");
                                                                // }, 100);
             // console.log("active");                                                                            
                           }                          
             else if (w < sm){
                   $("#filteringPanel").removeClass("active");
                   $('#openCloseBtn_filter').addClass("openSwitch");                              
                   $('#openCloseBtn_filter').removeClass("closeSwitch");                              
                   $("#filteringPanel").animate({ left: "-255px"}, 10);                               
                   $("#mainPanel").animate({ marginLeft: "45px"}, 10 );                              
                   $("#mainPanel").animate({ width: "calc(100%-45px)"}, 10);                               
                   // $(function(){ setTimeout (function(){
                                                         $("#openCloseBtn_filter").css("background", "url('images/open.svg') no-repeat");
                                                        $("#openCloseBtn_filter").css("background-size", "15px 15px");
                                                       // }, 100);
                                }                                                            
            });

 $(window).resize(function(){
        //                    if ($("#filteringPanel").hasClass("active")) {
        //                       console.log("open") ;
        //                    var w = $(window).width()-25;
        //                        console.log(w);
        //                    } else if (!$("#filteringPanel").hasClass("active")) {
        //                    var w = $(window).width()-300;
        //                        console.log(w);
        //                    }
                    var w = $(window).width();
                    var sm = 500,
                        md = 992,
                        lg = 1200;
                    
                    if (w < sm) {
                        console.log("extra small device");
                        $('.table_smDivice,.table_mdDivice, .datatype_text').addClass("columnHide");
                    } else if (w >= sm && w < md){
                        $('.table_mdDivice, .datatype_text').addClass("columnHide");
                        $('.table_smDivice').removeClass("columnHide");
                        console.log("small device");                           
                    } else if (w >=md && w < lg){
                        $('.table_smDivice, .table_mdDivice, .datatype_text').removeClass("columnHide");
                         console.log("medium device");
                    } 

                    // else if (w >= lg){
                    //      console.log("large device");
                    //      $('.table_xsDivice, .table_smDivice, .table_mdDivice').css("visibility", "visible");
                    // }
                        
                    });

                    


////////////////////////////// Fetching Data using Ajax to generate table in result page //////////////////////////////
// **Note: Different rule of format is applied due to longer codes**

$(function(){
              //Create table using Ajax from JSON array
              $.getJSON("data/gisinventory_dummy20row.json", function(data){

                    $(data.GISinventory).each(function(){
                          $(
                            '<tr>'+
                            '<td class="resultTable_title table_xsDivice">'+this.title+'</td>'+
                            '<td class="resultTable_datatype table_smDivice">'+
                            '<span class="datatype_text" style="margin-left: 5px;">'+this.data_type+'</span>'+'</td>'+
                            '<td class="resultTable_tag table_mdDivice" >'+this.tag+'</td>'+
                            '<td class="resultTable_server table_mdDivice">'+this.server+'</td>'+
                            '<td class="resultTable_webService table_smDivice">'+this.web_service+'</td>'+
                            '<td class="resultTable_addToarcmap table_smDivice">'+this.arcmap+'</td>'+
                            '<td class="resultTable_moreinfo table_xsDivice"><a data-toggle="modal" href="#detailPageWindow" ><span class="moreInfo_icon">'+this.moreinfo+'</span></a></td>'+
                            // Belows are items need to be only displayed in detail modal window
                            '<td class="resultTable_desc table_noDisplay">'+this.description+'</td>'+
                            '<td class="resultTable_schema table_noDisplay">'+this.schema+'</td>'+
                            '<td class="resultTable_rowCt table_noDisplay">'+this.row_ct+'</td>'+
                            '<td class="resultTable_name table_noDisplay">'+this.name+'</td>'+
                            '</tr>')

                            
                          
                          // Add to the table
                          .appendTo('#table_result tbody');

        
                        
                          // Display no for items not show on result table
                          $(".table_noDisplay").css("display", "none");

                          // Create html element to contain icons(point/polygon/line/table) based on the data type
                          $(".resultTable_datatype").prepend(function(){

                                if ($(this).text() == "point"){
                                                               return "<span class='pointIconHolder iconHolder'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
                                                              }
                                else if ($(this).text() == "polygon"){
                                                                      return "<span class='polygonIconHolder iconHolder'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
                                                                     }
                                else if ($(this).text() == "line"){
                                                                   return "<span class='lineIconHolder iconHolder'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
                                                                  }
                                else if ($(this).text() == "table"){
                                                                    return "<span class='tableIconHolder iconHolder'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
                                                                   }
                          });
                          
                          // Add each svg element(point/plygon/line/table according to html tag created above)
                          $(".pointIconHolder").css("background", "url(images/result_detail/point.svg) no-repeat").css("background-position", "0px 0px").css("background-size", "18px 18px");                                
                          $(".polygonIconHolder").css("background", "url(images/result_detail/polygon.svg) no-repeat").css("background-position", "-2px 0px").css("background-size", "22px 19px");
                          $(".lineIconHolder").css("background", "url(images/result_detail/line.svg) no-repeat").css("background-position", "-2px 0px").css("background-size", "22px 19px");
                          $(".tableIconHolder").css("background", "url(images/result_detail/table.svg) no-repeat").css("background-position", "-2px 0px").css("background-size", "22px 19px");
                          
                          // Create html element to contain Web Server icon
                          $(".resultTable_webService").prepend(function(){
                                if ($(this).text() == "y"){
                                                           return "<span class='webserviceIconHolder iconHolder' style='margin-left: 28px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
                                                          }
                                else if ($(this).text() == "n"){
                                                                return "<span></span>";
                                                               }
                          });

                          // Add Web Service icon
                          $(".webserviceIconHolder").css("background", "url(images/result_detail/web_service.svg) no-repeat").css("background-size", "18px 18px");
                          // Hide "y" and "n" letter from result table
                          $(".resultTable_webService").css("color", "rgba(0,0,0,0)");
                        
                          $(".resultTable_addToarcmap").prepend(function(){
                                if ($(this).text() == "y"){
                                                           return "<span class='addArcmapIconHolder iconHolder' style='margin-left: 32px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
                                                          }
                                else if ($(this).text() == "n"){
                                                                return "<span></span>";
                                                               }
                          });



                          // Add Add ArcMap icon
                          $(".addArcmapIconHolder").css("background", "url(images/result_detail/add_arcmap2.svg) no-repeat")
                                                   .css("background-position", "0px -1px")
                                                   .css("background-size", "22.5px 20px");
                                                   
                                                   
                          // Hide "y" and "n" letter from result table
                          $(".resultTable_addToarcmap").css("color", "rgba(0,0,0,0)");
                          

                          // Create html element to contain More Info icon
                          $(".moreInfo_icon").prepend(function(){
                                if ($(this).text() == "y"){
                                                           return "<span class='moreinfoIconHolder iconHolder' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
                                                          }
                                else if ($(this).text() == "n"){
                                                                return "<span></span>";
                                                               }    
                          });

                          // Add More Info icon
                          $(".moreInfo_icon").css("background", "url(images/result_detail/moreinfo.svg) no-repeat").css("background-size", "22px 18px");
                          // Hide "y" and "n" letter from result table
                          $(".moreInfo_icon").css("color", "rgba(0,0,0,0)");
                          $(".moreInfo_icon").css("margin-left", "20px");
                        
        
                          $("span.iconHolder").css("opacity", 0.75);
                          $(".moreInfo_icon").css("opacity", 0.75);
                          
                          $("span.webserviceIconHolder, span.addArcmapIconHolder").hover(function(){
                                                                $(this).css("opacity", 1);
                                                                $(this).css("cursor", "pointer");
                                                               }, function(){
                                                                             $(this).css("opacity", 0.75);
                                                                            }
                                                     );
                          
                          $("span.moreInfo_icon").hover(function(){
                                                                   $(this).css("opacity", 1);
                                                                   $(this).css("cursor", "pointer");
                                                                  }, function(){
                                                                                $(this).css("opacity", 0.75);
                                                                               }
                                                    );
                          // Delete underline on hover
                          $("span, td a").css("text-decoration", "none");
                          
                          // Click and find certain data relate to clicked row and put them into detail modal window
                          $(".moreInfo_icon").on("click", function(){

                              // First, find table index number of clicked item
                              var indexNumber = $(".moreInfo_icon").index(this);
                              // console.log(indexNumber);

                              // Each data is looked through based on clicked index number (number of rows)

                              // Description
                              var detail_description = $("tr").children("td.resultTable_desc").eq(indexNumber).text();
                              // console.log(detail_description);
                              // Put extracted texts into detail modal window
                              $("#detailPageDescription").text(detail_description);

                              // Title
                              var detail_title = $("tr").children("td.resultTable_title").eq(indexNumber).text();
                              // console.log(detail_title);
                              $("#detailPageTitle").text(detail_title);

                              // Name
                              var detail_name = $("tr").children("td.resultTable_name").eq(indexNumber).text();
                              // console.log(detail_name);
                              $("#detailPageName").text(detail_name);
                              
                              // Tag
                              var detail_tag = $("tr").children("td.resultTable_tag").eq(indexNumber).text();
                              // console.log(detail_name);
                              $("#detailPageTag").text(detail_tag);

                              // Schema
                              var detail_schema = $("tr").children("td.resultTable_schema").eq(indexNumber).text();
                              // console.log(detail_schema);
                              $("#detailPageSchema").text(detail_schema);

                              // Row count
                              var detail_rowCt = $("tr").children("td.resultTable_rowCt").eq(indexNumber).text();
                              // console.log(detail_rowCt);
                              $("#detailPageRowCount").text(detail_schema);

                              

                          }); // on click func ends

                 
                          // Change Columns to show depending on screen size to chage

                          $(window).resize(function(){
                          
                                                      // Set scree size to switch table appearance
                                                      var w = $(window).width();
                                                      var sm = 500,
                                                          md = 992;
                                                      
                                                      if (w < sm) {
                                                                    // console.log("extra small device");
                                                                    $('.table_smDivice,.table_mdDivice, .datatype_text').addClass("columnHide");
                                                                  }
                                                       else if (w >= sm && w < md){
                                                                                   // console.log("small device");
                                                                                   $('.table_mdDivice, .datatype_text').addClass("columnHide");
                                                                                   $('.table_smDivice').removeClass("columnHide");
                                                                                  }  
                                                       else if (w >=md){
                                                                                   // console.log("medium device");
                                                                                   $('.table_smDivice, .table_mdDivice, .datatype_text').removeClass("columnHide");
                                                                                 } 
                                                      }); 

                          $(function(){
                                       var w = $(window).width();
                                       var sm = 500,
                                           md = 992;

                                       if (w < sm) {
                                                    //console.log("extra small device");
                                                    $('.table_smDivice,.table_mdDivice, .datatype_text').addClass("columnHide");
                                                  }
                                       else if (w >= sm && w < md){
                                                                   //console.log("small device");
                                                                   $('.table_mdDivice, .datatype_text').addClass("columnHide");
                                                                   $('.table_smDivice').removeClass("columnHide");
                                                                  }    
                                       else if (w >=md){
                                                        //console.log("medium device and larger");
                                                        $('.table_smDivice, .table_mdDivice, .datatype_text').removeClass("columnHide");    
                                                       } 
                                      });

                

                       });
                      
                    });
                       
              });



 
                $("dl.accordion").prepend("<span class='icon'>&nbsp;&nbsp;&nbsp;&nbsp;</span>");

                $(".icon").css("background", function() {if($("dt#metaTitle").hasClass("active")) { return "url('images/downarrow.svg') no-repeat 50% 50%"} else if ($("dt#metaTitle").not(".active")) {return "url('images/rightarrow.svg') no-repeat 50% 50%" } });
                           
                
               
           $("dt#metaTitle").hover(function(){
                               //$(this).addClass("hover");
                                     $(this).css("cursor", "pointer");
                                     $(this).css("color", "rgb(89, 184, 230)");
                                     $(".icon").css("background", function(){ if ($("dt#metaTitle").hasClass("active")) {return "url('images/downarrow_hover.svg') no-repeat 50% 50%"} else { return "url('images/rightarrow_hover.svg') no-repeat 50% 50%"} } );
                                     
                           }, function(){
                               //$(this).removeClass("hover");
                                     $(this).css("color", function(){if($(this).hasClass("active")) { return "rgb(51, 103, 153)"} else {return "#797979"}});
                                     $(".icon").css("background", function(){ if ($("dt#metaTitle").hasClass("active")) {return "url('images/downarrow.svg') no-repeat 50% 50%"} else { return "url('images/rightarrow.svg') no-repeat 50% 50%"} } );
                          })
                          .click(
                                     function(){
                                    if (!$(this).hasClass("active")) {
                                        $(this).addClass("active");
                                        $(".icon").css("background", "url('images/downarrow.svg') no-repeat 50% 50%");
                                        // $("dt").css("color", "#797979");
                                        $("dd#metadd").slideDown("fast");
                                      
                                        $(this).css("color", "rgb(51, 103, 153)");
                                        // $("> .icon", this).css("background", "url('images/helpTab/downarrow.svg') no-repeat 50% 50%");       
                                        // $("+ dd", this).slideDown("fast");
                                    }
                                  
                                     else if
                                     ($(this).hasClass("active")){
                                         $(this).removeClass("active");
                                         $("dd#metadd").slideUp("fast");
                                         $(".icon").css("background", "url('images/rightarrow.svg') no-repeat 50% 50%");
                                         $(this).css("color", "#797979");
                                     }
                                         
                                
                          });
                              
  
  // $("#popoverCloseBtn").click(
  //   function(){ $("#popover-content").css("display", "none");

  //   });

$('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});
         
$("#loginEditBox").hover(function(){
  $("#loginEditText").css("color", "rgb(89, 184, 230)");
  $("#loginEditIcon").css("background", "url(images/edit_hover.svg) no-repeat left top").css("background-size", "15px 15px").css("background-position", "0px 2px").css("padding-left", "20px");
 
}, function(){
  $("#loginEditText").css("color", "#797979");
  $("#loginEditIcon").css("background", "url(images/edit.svg) no-repeat left top").css("background-size", "15px 15px").css("background-position", "0px 2px").css("padding-left", "20px");
});





  