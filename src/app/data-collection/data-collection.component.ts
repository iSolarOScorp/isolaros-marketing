import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-collection',
  templateUrl: './data-collection.component.html',
//   styleUrls: ['./data-collection.component.scss']
})
export class DataCollectionComponent implements OnInit {
  title = 'Reactive Forms';
  home_owner;
  address;
  areaCodeClass = false;

  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
  options = {
    componentRestrictions :{
      country : ['USA']
    }
  }
  constructor(private utilityService : UtilityService,
              private router : Router) { }

  ngOnInit(): void {
    $(document).ready(function() {
      $("#basic-form").validate();
    });
    $(document).ready(function () {
      var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn'),
          allPrevBtn = $('.prevBtn');
          allWells.hide();
  
      navListItems.click(function (e) {
          e.preventDefault();
             var $target = $($(this).attr('href')),
              $item = $(this);
  
          if (!$item.hasClass('disabled')) {
              navListItems.removeClass('btn-indigo').addClass('btn-default');
              $item.addClass('btn-indigo');
              allWells.hide();
            //   $target.show();
            //   $target.find('input:eq(0)').focus();
          }
      });
  
      allPrevBtn.click(function(){
          var curStep = $(this).closest(".setup-content"),
              curStepBtn = curStep.attr("id"),
              prevStepSteps = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");
  
              prevStepSteps.removeAttr('disabled').trigger('click');
      });
  
      allNextBtn.click(function(){
          var curStep = $(this).closest(".setup-content"),
              curStepBtn = curStep.attr("id"),
              nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
              curInputs = curStep.find("input[type='text'],input[type='url']"),
              isValid = true;
  
          $(".form-group").removeClass("has-error");
          for(var i=0; i< curInputs.length; i++){
              if (!curInputs[i].validity.valid){
                  isValid = false;
                  $(curInputs[i]).closest(".form-group").addClass("has-error");
              }
          }
  
          if (isValid)
              nextStepWizard.removeAttr('disabled').trigger('click');
      });
  
      $('div.setup-panel div a.btn-indigo').trigger('click');
  });
  $("#checkbox_redirect").click(function() {
    
    var url = "/getting-started/not-qualified";
    window.location.href = url;
    
});
             $(document).ready(function(){

                $(".steps-step").click(function(){
                    $(".cirnextbtn").removeClass('activecoloer');
                    console.log($(this).attr('check'));
                    if($(this).attr('check') == 1){
                        
                    $("#form1").show(); 
                    $("#form2").hide();
                    $("#form3").hide();
                    $("#form4").hide();
                    $("#form5").hide();
                    $("#form6").hide();
                    $("#form7").hide();
                    $(".cirnextbtn1").addClass('activecoloer');
                    //var cirnextbtn = "cirnextbtn"+$(this).attr("check");
                    //alert(cirnextbtn);
                    //$(".btn.btn-indigo.btn-circle.cirnextbtn.cirnextbtn1:after").css('background','#3C763D !important');

                    /*$(".form-error-message").hide();
                    $(".rqheading").css("color","");*/
                    }
                    else if($(this).attr('check') == 2){
                    $("#form1").hide();
                    $("#form2").show();
                    $("#form3").hide();
                    $("#form4").hide();
                    $("#form5").hide();
                    $("#form6").hide();
                    $("#form7").hide();
                    $(".cirnextbtn2").addClass('activecoloer');

                    }
                    else if($(this).attr('check') == 3){
                    $("#form1").hide();
                    $("#form2").hide();
                    $("#form3").show();
                    $("#form4").hide();
                    $("#form5").hide();
                    $("#form6").hide();
                    $("#form7").hide();
                    $(".cirnextbtn3").addClass('activecoloer');
                    }
                    else if($(this).attr('check') == 4){
                    $("#form1").hide();
                    $("#form2").hide();
                    $("#form3").hide();
                    $("#form4").show();
                    $("#form5").hide();
                    $("#form6").hide();
                    $("#form7").hide();
                    $(".cirnextbtn4").addClass('activecoloer');
                    }
                    else if($(this).attr('check') == 5){
                    $("#form1").hide();
                    $("#form2").hide();
                    $("#form3").hide();
                    $("#form4").hide();
                    $("#form5").show();
                    $("#form6").hide();
                    $("#form7").hide();
                    $(".cirnextbtn5").addClass('activecoloer');
                    }
                    else if($(this).attr('check') == 6){
                    $("#form1").hide();
                    $("#form2").hide();
                    $("#form3").hide();
                    $("#form4").hide();
                    $("#form5").hide();
                    $("#form6").show();
                    $("#form7").hide();	
                    $(".cirnextbtn6").addClass('activecoloer');
                    }
                    else if($(this).attr('check') == 7){
                    $("#form1").hide();
                    $("#form2").hide();
                    $("#form3").hide();
                    $("#form4").hide();
                    $("#form5").hide();
                    $("#form6").hide();
                    $("#form7").show();
                    $(".cirnextbtn7").addClass('activecoloer');
                    }
                     
                })
 
                $('.optionmk').click(function() {
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn2").addClass('activecoloer');		
                $("#form1").hide();
                $("#form2").show();
                });
                $('.optionmk2').click(function() {
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn3").addClass('activecoloer');		
                $("#form2").hide();
                $("#form3").show();
                });
                $('.optionmk3').click(function() {
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn4").addClass('activecoloer');		
                $("#form3").hide();
                $("#form4").show();
                });
            
                ////


                			
            $(".cirnextbtn").removeClass('activecoloer');
            $(".cirnextbtn3").addClass('activecoloer');		
            $("#form2").hide();
            // $("#form3").show();
            });
            $("#prebtn3").click(function(){
            $(".cirnextbtn").removeClass('activecoloer');
            $(".cirnextbtn2").addClass('activecoloer');	
                
            $("#form3").hide();
            $("#form2").show();
            });


                $("#nextbtn").click(function(){
                  var check = 0
                   console.log("we");
                   $(".optonmk").each(function(){
                    if($(this).prop("checked") == true){
                     check = 1;
                    } 
                })
                if(check == 0)
                {
                    $(".form-error-message").show();
                    $(".rqheading").css("color","#e34343");
                    return false;
                }
                else
                {
                    $(".form-error-message").hide();
                    $(".rqheading").css("color","");
                }
                   $(".cirnextbtn").removeClass('activecoloer');
                    $(".cirnextbtn2").addClass('activecoloer');
                    $("#form1").hide();
                    $("#form2").show();
                });

                $("#prebtn2").click(function(){
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn1").addClass('activecoloer');	
                    
                $("#form2").hide();
                $("#form1").show();
                });

                $("#nextbtn2").click(function(){
                    var check = 0;
                    $(".secformck").each(function(){
                        if($(this).prop("checked") == true){
                         check = 1;
                        }
                    })

                    if(check == 0)
                    {
                        $(".form-error-message").show();
                        $(".rqheading").css("color","#e34343");
                        return false;
                    }
                    else
                    {
                        $(".form-error-message").hide();
                        $(".rqheading").css("color","");
                    }			
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn3").addClass('activecoloer');		
                $("#form2").hide();
                $("#form3").show();
                });
                $("#prebtn3").click(function(){
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn2").addClass('activecoloer');	
                    
                $("#form3").hide();
                $("#form2").show();
                });

                $("#nextbtn3").click(function(){
                    var check = 0;
                    $(".thrdfrmck").each(function(){
                        if($(this).prop("checked") == true){
                         check = 1;
                        }
                    })

                    if(check == 0)
                    {
                        $(".form-error-message").show();
                        $(".rqheading").css("color","#e34343");
                        return false;
                    }
                    else
                    {
                        $(".form-error-message").hide();
                        $(".rqheading").css("color","");
                    }
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn4").addClass('activecoloer');	
                $("#form3").hide();
                $("#form4").show();
                });
                $("#prebtn4").click(function(){
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn3").addClass('activecoloer');	
                    
                $("#form4").hide();
                $("#form3").show();
                });

                $("#nextbtn4").click(function(){
                    
                    var mail = $("#first-name").val()
                    // var mail = $("#frmEmail").val();
                    console.log("fname",mail);
                    var pattern = /^[a-zA-Z\s]+$/;
                    var finalname = pattern.test(mail.trim());
                    if (!finalname) {
                        $(".form-error-message-name").show();
                        $(".rqheading").css("color","#e34343");
                        $(".buying-selling").css("border","1px solid rgb(185, 21, 23)");
                        return false;
                    } 

                    var mail = $("#last-name").val()
                    var pattern = /^[a-zA-Z\s]+$/;
                    var finalname = pattern.test(mail.trim());
                    if (!finalname) {
                        $(".form-error-message-name").show();
                        $(".rqheading").css("color","#e34343");
                        $(".buying-selling").css("border","1px solid rgb(185, 21, 23)");
                        return false;
                    } 

                    if($("#first-name").val() == ""){
                        $(".form-error-message-name").show();
                        $(".rqheading").css("color","#e34343");
                        $(".buying-selling").css("border","1px solid rgb(185, 21, 23)");
                    return false;
                    }
                    else
                    {
                        $(".form-error-message").hide();
                        $(".rqheading").css("color","");
                        $(".buying-selling").css("border","");
                    }
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn5").addClass('activecoloer');	
                
                $("#form4").hide();
                $("#form5").show();
                });
                $("#prebtn5").click(function(){
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn4").addClass('activecoloer');	
                
                $("#form5").hide();
                $("#form4").show();
                });


                $("#formiadd").keypress(function(e){
                    $('#formiadd').keypress(
                    function(event){
                        if (event.which == '13') {
                        event.preventDefault();
                        }
                    });
                });
            
                $("#nextbtn5").click(function(){
                    $('#formiadd').keypress(
                    function(event){
                        if (event.which == '13') {
                        event.preventDefault();
                        }
                    });
                    if($("#formiadd").val() == ""){
                        $(".form-error-message").show();
                        $(".rqheading").css("color","#e34343");
                        $(".buying-selling").css("border","1px solid rgb(185, 21, 23)");
                    return false;
                    }
                    else
                    {
                        $(".form-error-message").hide();
                        $(".rqheading").css("color","");
                        $(".buying-selling").css("border","");
                    }
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn6").addClass('activecoloer');	
                    
                $("#form5").hide();
                $("#form6").show();
                });
                $("#prebtn6").click(function(){
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn5").addClass('activecoloer');	
                $("#form6").hide();
                $("#form5").show();
                });


                $("#frmEmail").keypress(function(e){
                    $('#frmEmail').keypress(
                    function(event){
                        if (event.which == '13') {
                        event.preventDefault();
                        }
                    });
                });

                $("#nextbtn6").click(function(){
                    var mail = $("#frmEmail").val();
                    console.log(mail);
                    var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    var finalMail = pattern.test(mail.trim());
                    if (!finalMail) {
                        $(".form-error-message-email").show();
                        $(".rqheading").css("color","#e34343");
                        $(".buying-selling").css("border","1px solid rgb(185, 21, 23)");
                        return false;
                    } 
                    if($("#frmEmail").val() == ""){
                        $(".form-error-message").show();
                        $(".rqheading").css("color","#e34343");
                        $(".buying-selling").css("border","1px solid rgb(185, 21, 23)");
                    return false;
                    }
                    else
                    {
                        $(".form-error-message").hide();
                        $(".rqheading").css("color","");
                        $(".buying-selling").css("border","");
                    }
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn7").addClass('activecoloer');	
                    
                $("#form6").hide();
                $("#form7").show();
                });
                $("#prebtn7").click(function(){
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn6").addClass('activecoloer');	
                
                $("#form7").hide();
                $("#form6").show();
                });

                $("#nextbtn7").click(function(){
                    if($(".areacode").val() == ""){
                        $(".form-error-message").show();
                        $(".rqheading").css("color","#e34343");
                        $(".buying-selling").css("border","1px solid rgb(185, 21, 23)");
                    return false;
                    }
                    else
                    {
                        $(".form-error-message").hide();
                        $(".rqheading").css("color","");
                        $(".buying-selling").css("border","");
                    }
                     window.location.href='lead-funnel-submissions.php'; 
                });
                $("#prebtn7").click(function(){
                $(".cirnextbtn").removeClass('activecoloer');
                $(".cirnextbtn6").addClass('activecoloer');	
                    
                $("#form7").hide();
                $("#form6").show();
                });

                $(".areacode").keypress(function(e){
                
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    alert('Please type number only')
                }
                // my modifications  
                // checkPhoneNumber()
/*
                function checkPhoneNumber() {
                    var displayCount = document.getElementById("contactnumber").value.length;
                    alert('Test')
                }
                
                $("#contactnumber").click(function(){
                    if($(".contactnumber").value.length != 7){
                        alert('Please enter 7 digits for phone number')
                    }
                });
                */
                
            })
                
          
  }
  filterForm = new FormGroup({
    home_owner : new FormControl(),
    utility_bill : new FormControl(null),
    credit_estimate : new FormControl(null),
    first_name :  new FormControl(null,Validators.required),
    last_name :  new FormControl(null,Validators.required),
    email :  new FormControl(null,Validators.required),
    contact_number : new FormControl(null,[Validators.required,Validators.minLength(7),Validators.maxLength(7)]),
    area_code  : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),

 })

submited()
{
 
  console.log(this.filterForm.value);
  this.router.navigateByUrl('/getting-started/appointment');
//   this.utilityService.addData(home_owner,utlity_bill,credit_estimate,this.filterForm,this.address);
  // this.
}
     
public handleAddressChange(address: any) {
  this.address = address.formatted_address;
  console.log("address",address.formatted_address);
  console.log("aa",address);
  this.utilityService.updateAddress(address.formatted_address)
  // Do some stuff
}
homeOwner(data)
{
  this.utilityService.updateHomeOwner(data)    
}
bills(data)
{
  this.utilityService.updateBill(data)
}
credit(data)
{
    this.utilityService.updateCredit(data)   
}
firstName(value)
{
    console.log("length",value.length);
    let str : string = value[0];
    let str2 : string = value.slice(1).toLowerCase();
    console.log("str2", str2);
   str = str.toUpperCase() + str2;

    this.filterForm.controls['first_name'].setValue(str);
    console.log(value[0]);
    this.utilityService.updateName(str)   
}
lastName(value)
{
    let str : string = value[0];
    let str2 : string = value.slice(1).toLowerCase();
    console.log("str2", str2);
    str = str.toUpperCase() + str2;
    this.filterForm.controls['last_name'].setValue(str);
    this.utilityService.updateLast(str)   
}
Email(value)
{
  
    let str2 : string = value.toLowerCase();
     let str1 : string = str2.split(' ').join('');
    this.filterForm.controls['email'].setValue(str1);
    this.utilityService.updateEmail(value)   
}   

conntact(areaCode,c)
{
    if(c.length != 7)
    {
        $(".form-error-message-name").show();
        $(".rqheading").css("color","#e34343");
        $(".buying-selling").css("border","1px solid rgb(185, 21, 23)"); 
        console.log(areaCode.length);
     this.areaCodeClass = true;
    }
    else if(c.length == 7)
    {
        $(".form-error-message-name").hide();
        $(".rqheading").css("color","");
        $(".buying-selling").css("border"," 1px solid #5badfe");
    }

   if(c.length == 7 && areaCode.length == 3)
   {
    this.areaCodeClass = true;
   }
   else if(c.length != 7 && areaCode.length == 3)
   {
       this.areaCodeClass = false;
   } 
    // this.utilityService.updateContactNumber(areaCode,c)
} 
gotoNotQualified()
{
    this.router.navigateByUrl('/getting-started/not-qualified')
}
areaCode(areaCode)
{
   let code = areaCode.split('1').join('');
   this.filterForm.controls['area_code'].setValue(code);

    console.log(areaCode);
    if(code.length != 3)
    {
        $(".form-error-message-name").show();
        $(".rqheading").css("color","#e34343");
        $(".buying-selling1").css("border","1px solid rgb(185, 21, 23)"); 
        console.log(areaCode.length);
     
    }
    else if(code.length == 3)
    {
        $(".form-error-message-name").hide();
        $(".rqheading").css("color","");
        $(".buying-selling1").css("border","1px solid #5badfe");   
        console.log(areaCode.length);
        
    }
}

get f() { return this.filterForm.controls;}

AreaCodeInput(val)
{
  if(val.length !=3)
  {
    
  }
    console.log("length",val.length);
    if(val.length < 3){
        $(".form-error-message").show();
        $(".rqheading").css("color","#e34343");
        $(".buying-selling").css("border","1px solid rgb(185, 21, 23)");
  console.log("Areacode",val)
      }
if(val.length > 3){
    $(".form-error-message").hide();
    $(".rqheading").css("color","");
   
console.log("Areacode",val)
}

}

}

