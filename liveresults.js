// Change this for each competition
var compName = "Cubing in Cill Chainnigh 2019"
const compCode = '4619'
// ===================================================================

document.getElementById('comp-name').innerHTML = compName;



fetch(`https://m.cubecomps.com/competitions/${compCode}/events.json`)
  .then(res => res.json())
  .then(events => {
    const eventId = getEvent('chosenEvent')
    return events.find(event => event.rounds[0].event_id && event.rounds[0].event_id == eventId)
  }).then(event => {
    const buttonContainer = document.getElementById('resultsContainer')
    const ul = document.createElement('ul');



    event.rounds.forEach(round => {
      const live = (round.live == false) ? '' : `<span class="tag is-danger padded">Live</span>`
      const done = (round.finished == false) ? '' : `<span class="tag is-success padded">Done</span>`
      const li = document.createElement('li')
      const btn = document.createElement('a')
      btn.innerHTML = round.name + "&emsp;" + live + done
      btn.className = ''
      btn.setAttribute('data-round-id', round.id)
      btn.setAttribute('data-round-name', round.name)
      btn.addEventListener('click', roundSelection)
      li.className = ''
      li.appendChild(btn)
      ul.appendChild(li)
      buttonContainer.appendChild(ul)
      console.log(round.id);
      document.getElementById('infoTitle').innerHTML = 'Please Select A Round';
    })
  })



function roundSelection(e) {
    const roundId = e.currentTarget.getAttribute('data-round-id')
    const roundName = e.currentTarget.getAttribute('data-round-name')
    // Create the table base
    document.getElementById('infoTitle').innerHTML = '<i class="fas fa-circle-notch fa-spin icon is-large has-text-link"></i>';
    const tableContainer = document.createElement('table')
    tableContainer.className = 'table is-striped is-hoverable is-narrow is-fullwidth sticky-header'
    tableContainer.innerHTML = `<thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Country</th>
        <th>Average</th>
        <th>Best</th>
        <th>T1</th>
        <th>T2</th>
        <th>T3</th>
        <th>T4</th>
        <th>T5</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Country</th>
        <th>Average</th>
        <th>Best</th>
        <th>T1</th>
        <th>T2</th>
        <th>T3</th>
        <th>T4</th>
        <th>T5</th>
      </tr>
    </tfoot>`

    // Clear the old table
    const resultsTableDiv = document.getElementById('resultsTable')
    resultsTableDiv.innerHTML = ''

    resultsTableDiv.appendChild(tableContainer)
    const tableBody = document.createElement('tbody')
    tableContainer.appendChild(tableBody)

    // Get the data
    const url = `https://m.cubecomps.com/competitions/${compCode}/events/${getEvent('chosenEvent')}/rounds/${roundId}/results.json`

    fetch(url).then(res => res.json()).then(results => {
      results.forEach(result => {
        const avgRecord = result.mean_record || result.average_record
        const avgRecordText = (avgRecord == null) ? '' : `<span class="tag is-primary">${avgRecord}</span>`
        const bestRecordText = (result.best_record == null) ? '' : `<span class="tag is-primary">${result.best_record}</span>`
        const rowHtml = `<tr>
          <td ${result.top_position ? 'class="is-italic has-text-weight-bold has-text-link"' : ''}>${result.position}</td>
          <td ${result.top_position ? 'class="is-italic has-text-weight-bold has-text-link"' : ''}>${result.name}</td>
          <td ${result.top_position ? 'class="is-italic has-text-weight-bold has-text-link"' : ''}>${result.country}</td>
          <td>${result.average || result.mean  || ''} ${avgRecordText}</td>
          <td>${result.best  || ''} ${bestRecordText}</td>
          <td>${result.t1 || ''}</td>
          <td>${result.t2 || ''}</td>
          <td>${result.t3 || ''}</td>
          <td>${result.t4 || ''}</td>
          <td>${result.t5 || ''}</td>
        </tr>`
        const row = htmlToElement(rowHtml)
        tableBody.appendChild(row)
        document.getElementById('infoTitle').innerHTML = roundName;
      })
    })
}


function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function getEvent(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
