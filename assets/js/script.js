{
    function apagartudo(){
        document.getElementById('modalidade_ext').style.display = 'none';
        document.getElementById('grapplingext').style.display = "none";
        document.getElementById('jiuext').style.display = 'none';
        document.getElementById('capoeiraext').style.display = "none";
        document.getElementById('boxeext').style.display = "none";
        document.getElementById('personalext').style.display = "none";
        document.getElementById('muayext').style.display = 'none';
    }
    function muaythai(){
        document.getElementById('modalidade_ext').style.display = 'flex';
        document.getElementById('muayext').style.display = 'flex';
        document.getElementById('efuncional').style.display = "none";
        document.getElementById('hiit').style.display = "none";
        document.getElementById('ffight').style.display = 'none';
        document.getElementById('grapplingext').style.display = "none";
        document.getElementById('jiuext').style.display = 'none';
        document.getElementById('capoeiraext').style.display = "none";
        document.getElementById('boxeext').style.display = "none";
        document.getElementById('personalext').style.display = "none";
    }
    function fecharmodalidade(){
        document.getElementById('modalidade_ext').style.display = 'none';
    }
    function jiujitsu(){
        document.getElementById('modalidade_ext').style.display = 'flex';
        document.getElementById('jiuext').style.display = 'flex';
        document.getElementById('efuncional').style.display = "none";
        document.getElementById('hiit').style.display = "none";
        document.getElementById('ffight').style.display = 'none';
        document.getElementById('grapplingext').style.display = "none"
        document.getElementById('muayext').style.display = 'none';
        document.getElementById('capoeiraext').style.display = "none"
        document.getElementById('boxeext').style.display = "none"
        document.getElementById('personalext').style.display = "none"
    }
    function grappling(){
        document.getElementById('modalidade_ext').style.display = 'flex';
        document.getElementById('grapplingext').style.display = "flex"
        document.getElementById('efuncional').style.display = "none";
        document.getElementById('hiit').style.display = "none";
        document.getElementById('ffight').style.display = 'none';
        document.getElementById('muayext').style.display = 'none';
        document.getElementById('jiuext').style.display = 'none';
        document.getElementById('capoeiraext').style.display = "none"
        document.getElementById('boxeext').style.display = "none"
        document.getElementById('personalext').style.display = "none"
    }
    function capoeira(){
        document.getElementById('modalidade_ext').style.display = 'flex';
        document.getElementById('capoeiraext').style.display = "flex"
        document.getElementById('efuncional').style.display = "none";
        document.getElementById('hiit').style.display = "none";
        document.getElementById('ffight').style.display = 'none';
        document.getElementById('muayext').style.display = 'none';
        document.getElementById('jiuext').style.display = 'none';
        document.getElementById('grapplingext').style.display = "none"
        document.getElementById('boxeext').style.display = "none"
        document.getElementById('personalext').style.display = "none"
    }
    function boxe(){
        document.getElementById('modalidade_ext').style.display = 'flex';
        document.getElementById('boxeext').style.display = "flex"
        document.getElementById('efuncional').style.display = "none";
        document.getElementById('hiit').style.display = "none";
        document.getElementById('ffight').style.display = 'none';
        document.getElementById('muayext').style.display = 'none';
        document.getElementById('jiuext').style.display = 'none';
        document.getElementById('grapplingext').style.display = "none"
        document.getElementById('capoeiraext').style.display = "none"
        document.getElementById('personalext').style.display = "none"
    }
    function personal(){
        document.getElementById('modalidade_ext').style.display = 'flex';
        document.getElementById('personalext').style.display = "flex"
        document.getElementById('efuncional').style.display = "none";
        document.getElementById('hiit').style.display = "none";
        document.getElementById('ffight').style.display = 'none';
        document.getElementById('muayext').style.display = 'none';
        document.getElementById('jiuext').style.display = 'none';
        document.getElementById('grapplingext').style.display = "none"
        document.getElementById('capoeiraext').style.display = "none"
        document.getElementById('boxeext').style.display = "none"
    }
    function ffight(){
        document.getElementById('modalidade_ext').style.display = 'flex';
        document.getElementById('ffight').style.display = 'flex';
        document.getElementById('efuncional').style.display = "none";
        document.getElementById('hiit').style.display = "none";
        document.getElementById('personalext').style.display = "none";
        document.getElementById('muayext').style.display = 'none';
        document.getElementById('jiuext').style.display = 'none';
        document.getElementById('grapplingext').style.display = "none"
        document.getElementById('capoeiraext').style.display = "none"
        document.getElementById('boxeext').style.display = "none"
    }
    function hiit(){
        document.getElementById('modalidade_ext').style.display = 'flex';
        document.getElementById('hiit').style.display = "flex";
        document.getElementById('ffight').style.display = 'none';
        document.getElementById('efuncional').style.display = "none";
        document.getElementById('personalext').style.display = "none"
        document.getElementById('muayext').style.display = 'none';
        document.getElementById('jiuext').style.display = 'none';
        document.getElementById('grapplingext').style.display = "none"
        document.getElementById('capoeiraext').style.display = "none"
        document.getElementById('boxeext').style.display = "none"
    }
    function efuncional(){
        document.getElementById('modalidade_ext').style.display = 'flex';
        document.getElementById('efuncional').style.display = "flex";
        document.getElementById('hiit').style.display = "none";
        document.getElementById('ffight').style.display = 'none';
        document.getElementById('personalext').style.display = "none"
        document.getElementById('muayext').style.display = 'none';
        document.getElementById('jiuext').style.display = 'none';
        document.getElementById('grapplingext').style.display = "none"
        document.getElementById('capoeiraext').style.display = "none"
        document.getElementById('boxeext').style.display = "none"
    }
    function aparecermenu(){
        var teste = document.getElementById('menusite');

        if(teste.style.display == 'flex'){
            teste.style.display = 'none';
        }else{
            teste.style.display = 'flex';
        }
    }
    function adicionamenu(){
        var menu1 = document.getElementById('menu1').style.backgroundColor='#231F20';
        var menu2 = document.getElementById('menu2').style.backgroundColor='#231F20';;
        var menu3 = document.getElementById('menu3').style.backgroundColor='#231F20';;
        var menu4 = document.getElementById('menu4').style.backgroundColor='#231F20';;
        var menu5 = document.getElementById('menu5').style.backgroundColor='#231F20';;



        var el = document.getElementById('menusite');
        el.addEventListener('click', function(e) {
            e.target.style.backgroundColor = '#F94C02';
        });
    }
}