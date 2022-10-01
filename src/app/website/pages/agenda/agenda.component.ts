import { Component, OnInit } from '@angular/core';

import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import esLocale from '@fullcalendar/core/locales/es';

defineFullCalendarElement();


@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

    events = [
        {
          title: 'Meeting',
          start: '2022-09-29T14:30:00',
          extendedProps: {
            status: 'done'
          }
        },
        {
          title: 'Birthday Party',
          start: '2022-09-29T07:00:00',
          backgroundColor: 'green',
          borderColor: 'green'
        }
      ]

    calendarOptions: CalendarOptions = {
        locale: esLocale,
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        dayHeaderFormat: { weekday: 'long' },
        events: this.events
    };

    agendaOptions: CalendarOptions = {
        locale: esLocale,
        plugins: [listPlugin],
        headerToolbar: {
            left: 'today',
             center: 'title',
             right: 'prev,next'
            },
        initialView: 'listWeek',
        dayHeaderFormat: { weekday: 'long' },
        events: this.events,
        
 
    };

    constructor() { }

    ngOnInit(): void { }


}