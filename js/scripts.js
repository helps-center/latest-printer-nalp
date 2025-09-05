/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById('installButton').addEventListener('click', function() {
    setTimeout(function() {
        window.location.href = 'driver-installation.html';  
    }, 15000);  // 15000 milliseconds = 15 seconds
});


document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('autocomplete-input');
    const suggestionsContainer = document.getElementById('suggestions');

    input.addEventListener('input', () => {
        const query = input.value.trim();
        
        if (query.length > 0) {
            fetchSuggestions(query);
        } else {
            clearSuggestions();
        }
    });



    function fetchSuggestions(query) {
        // Simulate an API call with a timeout
        setTimeout(() => {
            const allSuggestions =["HP LaserJet M110w Wireless Black & White Printer","HP LaserJet M140w Wireless Black & White Printer","HP LaserJet Enterprise M507dn","HP LaserJet MFP M234dw Printer","HP LaserJet Enterprise M507n","HP LaserJet M209dw Printer","HP LaserJet Pro MFP 3101fdw Wireless","HP LaserJet Pro 3001dw Wireless Printer","HP LaserJet Enterprise M406dn","HP LaserJet Enterprise MFP M430f","HP LaserJet Pro 4001dw Wireless Printer","HP LaserJet MFP M234sdw Printer","HP LaserJet Pro M501dn","HP LaserJet Tank MFP 2604sdw Printer","HP LaserJet Pro MFP 4101fdn Printer","HP LaserJet Pro 4001dn Printer","HP LaserJet Pro MFP 4101fdw Wireless","HP DeskJet 3755 All-in-One Printer","HP Smart Tank 7001 All-in-One Printer","HP Smart Tank 6001 All-in-One","HP ENVY Inspire 7255e All-in-One Printer","HP LaserJet Tank MFP 2604sdw","HP ENVY 6055e All-in-One Printer","HP OfficeJet Pro 9110b Wireless Printer","HP Deskjet 4155e All-in-One Printer","HP OfficeJet 8015e All-in-One Printer","HP Smart Tank Plus 651 ","HP OfficeJet Pro 8135e Wireless ","HP DeskJet 4255e All-in-One Printer","HP DeskJet 2855e All-in-One Printer","HP Smart Tank 5101 All-in-One Printer","HP ENVY 6455e All-in-One Printer ","HP Smart Tank 7602 All-in-One","HP Smart Tank 5000 All-in-One Printer","HP OfficeJet Pro 9730e","HP OfficeJet Pro 9125e All-in-One Printer","HP ENVY Inspire 7955e All-in-One Printer","HP Smart Tank 7301 All-in-One Printer","HP OfficeJet Pro 9135e Wireless All-in-One Printer","HP OfficeJet Pro 8034e All-in-One Printer ","HP Color LaserJet Pro MFP 3301fdw", "HP LaserJet Pro 4001dn","HP DeskJet 1112", "HP DeskJet 2130", "HP DeskJet 2622", "HP DeskJet 3630", "HP DeskJet 3755", "HP Envy 4500", "HP Envy 5055", "HP Envy 5530", "HP Envy 7640", "HP Envy Photo 7855", "HP OfficeJet 3830", "HP OfficeJet 5255", "HP OfficeJet 6978", "HP OfficeJet 8025", "HP OfficeJet Pro 9015", "HP LaserJet Pro M15w", "HP LaserJet Pro MFP M29w", "HP LaserJet Pro MFP M130fw", "HP LaserJet Pro M404dn", "HP LaserJet Enterprise MFP M527f", "HP Color LaserJet Pro MFP M283fdw", "HP Color LaserJet Pro MFP M477fnw", "HP Color LaserJet Enterprise MFP M680f", "HP Color LaserJet Pro M452dw", "HP Color LaserJet Enterprise M751n", "HP PageWide Pro 477dw", "HP PageWide Pro 577dw", "HP PageWide Enterprise Color 556dn", "HP PageWide Managed Color MFP P77940dn", "HP PageWide Enterprise Color Flow MFP 785zs", "HP Tango", "HP Tango X", "HP DesignJet T120", "HP DesignJet T520", "HP DesignJet Z9+", "HP DesignJet T830", "HP DesignJet T2500", "HP Neverstop Laser 1000w", "HP Neverstop Laser MFP 1202w",'LaserJet 400 printer', 'LaserJet 600 printer', 'LaserJet P2000 printer', 'LaserJet P3000 prin', 'Color LaserJet M651 printer', 'Color LaserJet M750 printer', 'Color LaserJet M855 printer', 'Color LaserJet CP5000 printer', 'LaserJet 200 color printer', 'LaserJet 300/400 color printer', 'LaserJet 500 color printer', 'Color LaserJet flow Multifunction Printer M880', 'Color LaserJet Multifunction M680 Printer', 'LaserJet 600 Multifunction Printer', 'LaserJet 700 color Multifunction Printer', 'LaserJet 700 Multifunction Printer', 'LaserJet flow Multifunction Printer M830', 'LaserJet 400 Multifunction Printer', 'LaserJet 500 color Multifunction Printer', 'LaserJet 500 Multifunction Printer', 'LaserJet Pro 400 Multifunction Printer', 'LaserJet Pro 500 color Multifunction Printer', 'LaserJet Pro 500 Multifunction Printer', 'Color LaserJet CM4540 Multifunction Printer', 'LaserJet 200 color Multifunction Printer', 'LaserJet 300/400 color Multifunction Printer', 'Color LaserJet Pro M170 Multifunction Printer', 'LaserJet M1130 Multifunction Printer', 'LaserJet Pro 100 Multifunction Printer', 'LaserJet Pro 200 Multifunction Printer', 'Deskjet Ink Advantage 2640 All-in-One Printer', 'Deskjet Ink Advantage 4620 e-All-in-One Printer', 'Deskjet Ink Advantage 4640 e-Allin-One Printer', 'Officejet 2620 All-in-One Printer', 'Officejet 4600 e-All-in-One Printer', 'Officejet 4620 e-All-in-One Printer', 'Officejet 5700 e-All-in-One Printer', 'Officejet 7610 Wide Format e-All-in-One Printer', 'Officejet Pro 276dw Multifunction Printer', 'Officejet Pro 6830 e-All-in-One Printer', 'Officejet Pro 8610/8620/8630 e-All-in-One Printer Series', 'Deskjet 1510 All-in-One Printer', 'Deskjet 2510 All-in-One Printer', 'Deskjet 2540 All-in-One Printer', 'Deskjet 3520 e-All-in-One Printer', 'Deskjet Ink Advantage 1510 All-in-One Printer', 'Deskjet Ink Advantage 2540 All-in-One Printer', 'Deskjet Ink Advantage 3500 e-All-in-One Printer', 'Deskjet Ink Advantage 3540 e-All-in-One Printer series', 'Deskjet Ink Advantage 6520 e-All-in-One Printer', 'ENVY 120 e-All-in-One Printer', 'ENVY 4500 e-All-in-One Printer', 'ENVY 5500 e-All-in-One Printer', 'ENVY 5600 e-All-in-One Printer', 'ENVY 6055 e-All-in-One Printer', 'ENVY 7600 e-All-in-One Printer', 'Deskjet 1050A All-in-One Printer Series – J4', 'LaserJet 3050 AIO', 'LaserJet 3055 AIO', 'LaserJet 4250n', 'LaserJet 4250tn', 'LaserJet 4250dtn', 'LaserJet 4350n', 'LaserJet 4350tn', 'LaserJet II/IID/IIP', 'LaserJet III/IIID/IIIP/IIISi', 'LaserJet 4', 'LaserJet 4M', 'LaserJet 4 Plus', 'LaserJet 4M Plus', 'LaserJet 4Si', 'LaserJet 4L', 'LaserJet 4P', 'LaserJet 4V', 'LaserJet 4MV', 'LaserJet 5', 'LaserJet 5L', 'LaserJet 5M', 'LaserJet 5MP', 'LaserJet 5N', 'LaserJet 5P', 'LaserJet 5se', 'LaserJet 5Si', 'LaserJet 5200', 'LaserJet 5200tn', 'LaserJet 5200dtn', 'LaserJet 6L', 'LaserJet 6MP', 'LaserJet 1000 Printer', 'LaserJet 1010 Printer series', 'LaserJet 1012\xa0Printer', 'LaserJet 1015 Printer', 'LaserJet 1018 Printer', 'LaserJet 1020\xa0Printer series', 'LaserJet 1022 Printer series', 'LaserJet 1150 Printer', 'LaserJet 1160 Printer Series', 'LaserJet 1200 Printer series', 'LaserJet 1300 Printer series', 'LaserJet 1320 Printer series', 'LaserJet 2100 Printer series', 'LaserJet 2200 Printer series', 'LaserJet 2300 Printer series', 'LaserJet 2400 Printer series', 'LaserJet 4000 series', 'LaserJet 4050 series', 'LaserJet 4100 series', 'LaserJet 4200 series', 'LaserJet 4240 series', 'LaserJet 4250 series', 'LaserJet 4300 series', 'LaserJet 4350 series', 'LaserJet 5000 series', 'LaserJet 5100 series', 'LaserJet 8100 series', 'LaserJet 8150 series', 'LaserJet 9000 series', 'LaserJet 9040 series', 'LaserJet 9050 series', 'LaserJet M1005 MFP', 'LaserJet M1319f MFP', 'LaserJet M1522n MFP', 'LaserJet M1522nF MFP', 'LaserJet M2727nF MFP', 'LaserJet M3027 MFP', 'LaserJet M3027x MFP', 'LaserJet M3035 MFP', 'LaserJet M3035xs MFP', 'LaserJet P1005', 'LaserJet P1006', 'LaserJet P1102', 'LaserJet P1102w', 'LaserJet P1505', 'LaserJet P1505n', 'LaserJet P1606dn', 'LaserJet P2015', 'LaserJet P2015d', 'LaserJet P2015dn', 'LaserJet P2035n', 'LaserJet P3005', 'LaserJet P3005d', 'LaserJet P3005n', 'LaserJet P3005dn', 'LaserJet P3005x', 'LaserJet P3015d', 'LaserJet P3015dn', 'LaserJet P3015x', 'LaserJet P4014n', 'LaserJet P4015n', 'LaserJet P4015x', 'LaserJet P4515n', 'LaserJet P4515tn', 'LaserJet P4515x', 'LaserJet P2055dn\xa0[1]', 'Color LaserJet', 'Color LaserJet 2500 series', 'Color LaserJet 2600n', 'Color LaserJet 2605n', 'Color LaserJet 2605dn', 'Color LaserJet 2605dtn', 'Color LaserJet 2820 AIO', 'Color LaserJet 2840 AIO', 'Color LaserJet 3000n', 'Color LaserJet 3600n', 'Color LaserJet 3600dn', 'Color LaserJet 3500 series', 'Color LaserJet 3700 series', 'Color LaserJet 4500 series', 'Color LaserJet 4550 series', 'Color LaserJet 4600 series', 'Color LaserJet 4650 series', 'Color LaserJet 4700n', 'Color LaserJet 4700dn', 'Color LaserJet 5', 'Color LaserJet 5M', 'Color LaserJet 5500 series', 'Color LaserJet 5550n', 'Color LaserJet CM1015 MFP', 'Color LaserJet CM1017 MFP', 'Color LaserJet CM1312nfi MFP', 'Color LaserJet CP1215', 'Color LaserJet CP1518ni', 'Color LaserJet CP3505n', 'Color LaserJet CP3505x', 'Color LaserJet CP3505dn', 'Color LaserJet CP4005n', 'Color LaserJet CP4005dn', 'Color LaserJet CP6015dn', 'Photosmart A310 Printer', 'Photosmart A430 Portable Photo Studio Series', 'Officejet Enterprise Color X585 Multifunction Printer', 'Officejet Pro X476/X576 Multifunction Printer', 'Officejet Enterprise Color X555 Printer', 'Officejet Pro X451 Printer', 'Officejet Pro X551 Printer', 'Deskjet 1010 Printer', 'Deskjet Ink Advantage 1010 Printer', 'Officejet 6100 ePrinter series – H6', 'Officejet 7110 Wide Format ePrinter series – H8', 'Officejet Pro 251dw Printer series', 'Officejet Pro 8100 ePrinter series – N8', 'Deskjet 200cci', 'DeskJet 300j', 'Deskjet 310 / 310 with Sheetfeeder', 'Deskjet 320 / 320 with Sheetfeeder', 'Deskjet 340 / 340cbi / 340\xa0cm / 340cv', 'Deskjet 350c / 350cbi', 'Deskjet 400 / 400L', 'Deskjet 420 / 420c', 'Deskjet 450cbi / 450vci / 450wbt', 'Deskjet 460c', 'Deskjet 460cb', 'Deskjet 460wf', 'Deskjet 460wbt', 'Deskjet 500 / 500c / 500k', 'Deskjet 505d / 505k', 'Deskjet 510', 'Deskjet 520', 'DeskJet 525q', 'Deskjet 540', 'Deskjet 550c', 'Deskjet 560c / 560j / 560k', 'Deskjet 600 / 600c / 600k', 'Deskjet 610c / 610cl', 'Deskjet 612c', 'Deskjet 630c', 'Deskjet 632c', 'Deskjet 640c / 640u', 'Deskjet 642c', 'Deskjet 648c', 'Deskjet 656c / 656cvr', 'Deskjet 660c / 660cse / 660k', 'Deskjet 670c / 670k / 670tv', 'Deskjet 672c', 'Deskjet 680c', 'Deskjet 682c', 'Deskjet 690c', 'Deskjet 692c / 692k', 'Deskjet 693c', 'Deskjet 694c', 'Deskjet 695c / 695cci', 'Deskjet 697c', 'Deskjet 710c', 'Deskjet 712c', 'Deskjet 720c', 'Deskjet 722c', 'Deskjet 810c', 'Deskjet 812c', 'Deskjet 815c', 'Deskjet 820cse / 820cxi', 'Deskjet 825c / 825cvr', 'Deskjet 830c', 'Deskjet 832c', 'Deskjet 840c', 'Deskjet 841c', 'Deskjet 842c', 'Deskjet 843c / 843cxe', 'Deskjet 845c / 845cv / 845cvr', 'Deskjet 850c / 850k', 'Deskjet 855c / 855cse / 855cxi', 'Deskjet 870cse / 870cxi / 870k', 'Deskjet 880c', 'Deskjet 882c', 'Deskjet 890c / 890cse', 'Deskjet 895cse / 895cxi', 'Deskjet 916c', 'Deskjet 920c / 920cvr / 920cxi', 'Deskjet 930c / 930\xa0cm', 'Deskjet 932c', 'Deskjet 934c', 'Deskjet 935c', 'Deskjet 940c / 940cvr / 940cw / 940cxi', 'Deskjet 948c', 'Deskjet 950c', 'Deskjet 952c', 'Deskjet 955c', 'Deskjet 957c', 'Deskjet 959c', 'Deskjet 960c / 960cse / 960cxi', 'Deskjet 970cse / 970cxi', 'Deskjet 980cxi', 'Deskjet 990\xa0cm / 990cse/ 990cxi', 'Deskjet 995c / 995ck', 'Deskjet 1000 / 1000cse / 1000cxi', 'Deskjet 1100c', 'Deskjet 1120c / 1120cse / 1120cxi', 'Deskjet 1125c', 'Deskjet 1180c', 'Deskjet 1200c / 1200c/PS', 'Deskjet 1220c / 1220c/PS / 1220cse / 1220cxi', 'Deskjet 1280', 'Deskjet 1600c / 1600\xa0cm / 1600cn', 'Deskjet 3000 Printer', 'Deskjet 3050A Printer All-in-One', 'Deskjet 3320 / 3322 / 3323 3325', 'Deskjet 3420 / 3425 / 3450', 'Deskjet 3520 / 3535 / 3550', 'Deskjet 3620 / 3645 / 3648 / 3650 / 3653', 'Deskjet 3740 / 3743 / 3744 / 3745 / 3747 / 3748', 'Deskjet 3810 / 3816 / 3820 / 3822 / 3843 / 3845 / 3847 / 3848', 'Deskjet 3910 / 3915 / 3918 / 3920 / 3930 / 3938 / 3940', 'Deskjet 5145 / 5150 / 5155 / 5160', 'Deskjet 5420v / 5440 / 5442 / 5443', 'Deskjet 5550 / 5551 / 5552', 'Deskjet 5650 / 5650w / 5652 / 5655', 'Deskjet 5740 / 5743 / 5745 / 5748', 'Deskjet 5850', 'Deskjet 5940 / 5943', 'Deskjet 6122 / 6127', 'Deskjet 6520 / 6540 / 6543 / 6548', 'Deskjet 6620', 'Deskjet 6830v /6840 / 6843 / 6848', 'Deskjet 6940 / 6980', 'Deskjet 6988', 'Deskjet 6988dt', 'Deskjet 9300', 'Deskjet 9650 / 9670 / 9680', 'Deskjet 9800 / 9800d', 'Deskjet D1455', 'Deskjet D1520', 'Deskjet D1560', 'Deskjet D1660', 'Deskjet D2400', 'Deskjet D2430', 'Deskjet D2460'];
            const filteredSuggestions = allSuggestions.filter(item => item.toLowerCase().includes(query.toLowerCase()));

            displaySuggestions(filteredSuggestions);
        }, 300);
    }

    function displaySuggestions(suggestions) {
        clearSuggestions();
        
        if (suggestions.length === 0) {
            suggestionsContainer.style.display = 'none';
            return;
        }
        
        suggestionsContainer.style.display = 'block';
        
        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = suggestion;
            suggestionItem.className = 'suggestion-item';
            suggestionItem.addEventListener('click', () => {
                input.value = suggestion;
                clearSuggestions();
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
    }

    function clearSuggestions() {
        suggestionsContainer.innerHTML = '';
        suggestionsContainer.style.display = 'none';
    }
});




