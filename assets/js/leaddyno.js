var lead = document.createElement('script');
lead.setAttribute('src', 'https://static.leaddyno.com/js');
document.getElementsByTagName('body')[0].append(lead);

console.log("LeadDyno not yet loaded", typeof LeadDyno);

// if ('outgrow.co' !== window.location.host || 'outgrow.us' !== window.location.host || 'rely.co' !== window.location.host )
	initLeadDyno();

function initLeadDyno() {
	if ('undefined' === typeof LeadDyno) {
		setTimeout(function () {
			initLeadDyno();
		}, 5000);
		return;
	}
	LeadDyno.domain = "outgrow.co";
    LeadDyno.key = '41c6592b3fbd4a29945c14f3e766a12a1d796246';
    LeadDyno.recordVisit();
    LeadDyno.autoWatch();
	console.log("LeadDyno initialized", typeof LeadDyno);
}