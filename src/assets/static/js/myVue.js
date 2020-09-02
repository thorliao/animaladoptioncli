const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data

// Dropdownlist讀json file
var urlAnimalAreaPkid = "http://localhost:3000/" + "animalAreaPkid";
var urlAnimalShelter = "http://localhost:3000/" + "animalShelter";
var urlvAnimalStatus = "http://localhost:3000/" + "animalStatus";
var urlAnimalKind = "http://localhost:3000/" + "animalKind";
var urlAnimalSex = "http://localhost:3000/" + "animalSex";
var urlAnimalBodyType = "http://localhost:3000/" + "animalBodyType";
var urlAnimalAge = "http://localhost:3000/" + "animalAge";
var urlAnimalSterilization = "http://localhost:3000/" + "animalSterilization";

var vAnimalAreaPkid = new Vue({
    el: '#animalAreaPkid',
    data() {
        return {
            selected: '',
            options: null
        }
    },
    created() {
        axios.get(urlAnimalAreaPkid)
            .then(response => (this.options = response.data))
            .catch(err => console.log(err));
    },
})

var vAnimalShelter = new Vue({
    el: '#animalShelter',
    data() {
        return {
            selected: '',
            options: null
        }
    },
    created() {
        axios.get(urlAnimalShelter)
            .then(response => (this.options = response.data));
    },
})

var vAnimalStatus = new Vue({
    el: '#animalStatus',
    data() {
        return {
            selected: 'OPEN',
            options: null
        }
    },
    created() {
        axios.get(urlvAnimalStatus)
            .then(response => (this.options = response.data));
    },
})

var vAnimalKind = new Vue({
    el: '#animalKind',
    data() {
        return {
            selected: '',
            options: null
        }
    },
    created() {
        axios.get(urlAnimalKind)
            .then(response => (this.options = response.data));
    },
})

var vAnimalSex = new Vue({
    el: '#animalSex',
    data() {
        return {
            selected: '',
            options: null
        }
    },
    created() {
        axios.get(urlAnimalSex)
            .then(response => (this.options = response.data));
    },
})

var vAnimalBodyType = new Vue({
    el: '#animalBodyType',
    data() {
        return {
            selected: '',
            options: null
        }
    },
    created() {
        axios.get(urlAnimalBodyType)
            .then(response => (this.options = response.data));
    },
})

var vAnimalAge = new Vue({
    el: '#animalAge',
    data() {
        return {
            selected: '',
            options: null
        }
    },
    created() {
        axios.get(urlAnimalAge)
            .then(response => (this.options = response.data));
    },
})

var vAnimalSterilization = new Vue({
    el: '#animalSterilization',
    data() {
        return {
            selected: '',
            options: null
        }
    },
    created() {
        axios.get(urlAnimalSterilization)
            .then(response => (this.options = response.data));
    },
})

// Global Function
var mixinAnimal = new Vue.mixin({
    data: function () {
        return {
            seenCountPerPage: true,
            seenPagination: true,
        }
    },
    methods: {
        loadData: function (type) {
            vtblAnimals.serverAnimals = null;
            vpagination.seenPagination = true;
            vselectedCountPerPage.seenCountPerPage = true;
            if (type === 'submit') vpagination.initial();

            const url = 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL';
            var urlGet = '';

            if ($('#animalStatus option:selected').val() !== '')
                urlGet = url + "&animal_status=" + $('#animalStatus option:selected').val();
            else
                urlGet = url;

            if ($('#animalAreaPkid option:selected').val() !== '')
                urlGet = urlGet + "&animal_area_pkid=" + $('#animalAreaPkid option:selected').val();
            if ($('#animalShelter option:selected').val() !== '')
                urlGet = urlGet + "&animal_shelter_pkid=" + $('#animalShelter option:selected').val();
            if ($('#animalKind option:selected').val() !== '')
                urlGet = urlGet + "&animal_kind=" + $('#animalKind option:selected').val();
            if ($('#animalSex option:selected').val() !== '')
                urlGet = urlGet + "&animal_sex=" + $('#animalSex option:selected').val();
            if ($('#animalBodyType option:selected').val() !== '')
                urlGet = urlGet + "&animal_bodytype=" + $('#animalBodyType option:selected').val();
            if ($('#animalAge option:selected').val() !== '')
                urlGet = urlGet + "&animal_age=" + $('#animalAge option:selected').val();
            if ($('#animalSterilization option:selected').val() !== '')
                urlGet = urlGet + "&animal_sterilization=" + $('#animalSterilization option:selected').val();

            urlGet = urlGet + "&$top=" + vselectedCountPerPage.selected + "&$skip=" + ((vpagination.currentPage - 1) * vselectedCountPerPage.selected);

            console.log(urlGet);

            axios.get(`${cors}${urlGet}`)
                .then((response) => { vtblAnimals.serverAnimals = response.data })

            $('#pagination').show();
        },

    }
})



// 每頁可顯示筆數
var vselectedCountPerPage = new Vue({
    mixins: ['mixinAnimal'],
    el: '#countPerPage',
    data: {
        seenCountPerPage: false,
        selected: '90',
        options: [{ value: '300', text: '300' }, { value: '600', text: '600' }, { value: '900', text: '900' }]
    },
    methods: {
        onChange: function () {
            vpagination.currentPage = 1;
            this.loadData();
        }
    }
})

// 上一頁、下一頁、資料正在第幾頁
var vpagination = new Vue({
    mixins: ['mixinAnimal'],
    el: '#pagination',
    data: {
        seenPagination: false,
        currentPage: 1
    },
    methods: {
        prePage: function () {
            if (this.currentPage > 1) this.currentPage = this.currentPage - 1;
            this.loadData();
        },
        nextPage: function () {
            this.currentPage = this.currentPage + 1;
            this.loadData();
        },
        initial: function () {
            vselectedCountPerPage.selected = 90;
            this.currentPage = 1;
        }
    }
})

// 查詢時
var vquery = new Vue({
    mixins: ['mixinAnimal'],
    el: '#queryButton',

})

// 查詢結果呈現
var vtblAnimals = new Vue({
    mixins: ['mixinAnimal'],
    el: '#tblAnimals',
    data: {
        serverAnimals: null,
    },
    methods: {
        routerPush: function (areaSubID) {
            //alert(areaSubID);
           localStorage.setItem('subID', areaSubID)            
            window.location.href = "detail.html";
        }
    }
})

