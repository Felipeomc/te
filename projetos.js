

			var timeline;
			$(document).ready(timeline_init);
			var texto = localStorage.getItem('valueTexto');
			var tech =  localStorage.getItem('valueText');
			function timeline_init() {
			
			
			   
				var options = {
					phases: [
						{ start: 2020, end: 2022, indicatorsEvery: 1, share: .3 },
						{ start: 2022, end: 2023, indicatorsEvery: 1, share: .3, className: 'timeline-unused-phase' },
						{ start: 2023, end: 2024, indicatorsEvery: 1, share: .3 }
					],
					//formatHeader: function (v) {
						//if(v < 0) return -v + ' BC';
						//if(v > 0) return v + ' AD';
						//return 'AD';
					//},					
					barHeight: 36,
					fontSize: 16
				};
				
				// note: item 'Lonely' has a popup text attached
				var data = [
					[{ id: 'Project A', start: 2020, end: 2021, className: 'styleB' , popup_html: '<b>Project A:</b><br> Date begin: 01/01/2020 <br> Date end: 10/12/2022 <br> Team: Claud, Evelyn, Funny, Gregory <br> Tags: <div class="row" style="justify-content: center;"> <p class="skill  btn btn-primary btn-rounded"  style="font-size: 14px"> Java </p>&ensp; <p class="skill btn btn-primary btn-rounded" style="font-size: 14px"> MVC </p>&ensp; <p class="skill  btn btn-primary btn-rounded" style="font-size: 14px"> Spring </p>&ensp;  <p class="skill btn  btn-primary btn-rounded"style="font-size: 14px"> Maven </p>&ensp; <p class="skill  btn btn-primary btn-rounded"style="font-size: 14px"> Mongo </p>&ensp; </div> </div>  </div> '  },
					 { id: 'Project B', start: 2021, end: 2022, className: 'styleB' , popup_html: '<b>Project B:</b><br> Date begin: 01/01/2020 <br> Date end: 10/12/2022 <br> Team: Helena, Icaro I., Loui L., Gregory <br> Tags: <div class="row" style="justify-content: center;"> <p class="skill  btn btn-primary btn-rounded"  style="font-size: 14px"> Spring </p>&ensp; <p class="skill btn btn-primary btn-rounded" style="font-size: 14px"> Web </p>&ensp; <p class="skill  btn btn-primary btn-rounded" style="font-size: 14px"> Mongo </p>&ensp;  <p class="skill btn  btn-primary btn-rounded"style="font-size: 14px"> Maven </p>&ensp; <p class="skill  btn btn-primary btn-rounded"style="font-size: 14px"> MVC </p>&ensp; </div> </div>  </div> '  }],
					 
					
					
					
					
					[{ id: 'Project C', start: 2020, end: 2022, className: 'styleC' , popup_html: '<b>Project C:</b><br> Date begin: 01/01/2020 <br> Date end: 10/12/2022 <br> Team: Oliver O., Pedro P., Roberta <br> Tags: <div class="row" style="justify-content: center;"> <p class="skill  btn btn-primary btn-rounded"  style="font-size: 14px"> Java </p>&ensp; <p class="skill btn btn-primary btn-rounded" style="font-size: 14px"> Web </p>&ensp; <p class="skill  btn btn-primary btn-rounded" style="font-size: 14px"> Spring </p>&ensp;  <p class="skill btn  btn-primary btn-rounded"style="font-size: 14px"> Maven </p>&ensp; <p class="skill  btn btn-primary btn-rounded"style="font-size: 14px"> Angular </p>&ensp; </div> </div>  </div> '  }],
					 
					 [{ id: 'New Project', start: 2021, end: 2023, className: 'styleA' , popup_html: '<b>Project D:</b><br> Date begin: 01/07/2021 <br> Date end: 01/07/2023 <br> Team:&ensp;'+texto+' <br> Tags:&ensp;'+tech+'<br><br><a href="form.html" style="justify-content: center;">change team</a>' }]
					 
					 
				];
				
				timeline = $('#timeline');
				timeline.simpleTimeline(options, data);				
				timeline.on('timeline:barclick', timeline_clicked);
			
			
				
				
			
			}
			


			
			function timeline_clicked(e) {
				var clicked_item = $(e.target);
				
				var sel = $('.selected');
				sel.removeClass('selected');
				$('#clicked-item').empty();
				
				if(sel.length == 0 || sel.data('id') != clicked_item.data('id')) {
					clicked_item.addClass('selected');
					$('#clicked-item').text("You clicked " + clicked_item.data('id'));
				}					
			}
			
			function add_item() {
				
				var data = timeline.getTimelineData();
				var nome;
				var nome = prompt("Enter project name:", nome);
				var inicio = prompt("Enter start year:", inicio);
				var fim = prompt("Enter end year:", fim);
				data.push([
					{
						id:nome, 
						start: inicio, 
						end: fim, 
						className: 'styleA', 
						popup_html: '<b>'+nome+':</b><br> Date Begin:&ensp;'+ inicio+'<br>  Date end:&ensp;'+ fim+'<br> Team:&ensp;'+texto+'<br><a href="form.html" style="justify-content: center;">change team</a>'
						
						
					}
				]);
				timeline.setTimelineData(data).refreshTimeline();
			}
			
			function remove_selected_item() {
				var sel_item_id = $('.selected').data('id');
				var data = timeline.getTimelineData();
				for(var l = 0; l < data.length; l++) {
					for(var i = 0; i < data[l].length; i++) {
						if(data[l][i].id == sel_item_id) {
							data[l].splice(i,1);
							if(data[l].length == 0)
								data.splice(l,1);
							timeline.setTimelineData(data).refreshTimeline();
							return;
						}
					}
				}					
			}
			
			function bind_popup() {
				var sel_item_id = $('.selected').data('id');
				if(typeof sel_item_id == 'undefined') {
					alert('Ain\'t nothin\' selected, yo!');
					return;
				}
				
				timeline.bindPopup(sel_item_id, '<p><b>Yo it\'s great</b></p><p>Lorem ipsum dolizzle da bomb da bomb, consectetuer adipiscing elit. Nullam sapien velit, boom shackalack volutpizzle, suscipizzle daahng dawg, gravida vel, hizzle. Pellentesque go to hizzle tortor. Sed eros. Izzle at dolizzle dapibus turpis tempizzle gangster. Maurizzle fo shizzle my nizzle nibh et turpizzle. Owned in tortizzle. Pellentesque away rhoncizzle nizzle.</p><p>For sure bizzle massa go to hizzle shizzlin dizzle. Boom shackalack tellivizzle ipsum primis in crunk gangster luctizzle et stuff yo mamma izzle Break yo neck, yall; Nizzle sure. Pellentesque stuff check out this get down get down senectizzle et netizzle bow wow wow malesuada fizzle ac gangster egestas. Funky fresh tempor cool crackalackin. Fizzle erizzle mah nizzle.</p>');
			}
			
			
		
   

	
