<template>
    <form id="signup-form" v-on:submit.prevent="submit">
        <div class="row">
            <div class="col-12 form-group">
                <label for="fullname" class="col-form-label col-form-label-lg">Full Name </label><span class="text-danger"> * </span>
                <input type="text" :class="{'is-invalid':validationStatus($v.fullname)}"  v-model.trim="$v.fullname.$model" id="fullname" class="form-control form-control-lg">
                <div v-if="!$v.fullname.required" class="invalid-feedback">The full name field is required</div>
            </div>
            <div class="col-12 form-group">
                <label for="email" class="col-form-label col-form-label-lg">Email </label><span class="text-danger"> * </span>
                <input type="text" :class="{'is-invalid':validationStatus($v.email)}"  v-model.trim="email" id="email" class="form-control form-control-lg">
                <div v-if="!$v.email.required" class="invalid-feedback">The email field is required</div>
                <div v-if="!$v.email.email" class="invalid-feedback">This email is not valid</div>
            </div>
            <div class="col-12 form-group">
                <label for="country" class="col-form-label col-form-label-lg">Country </label><span class="text-danger"> * </span>
                <select name="country" :class="{'is-invalid':validationStatus($v.country)}"  v-model.trim="country" id="country" class="form-control form-control-lg">
                    <option value="">Select a country</option>
                    <option v-for="(item, index) in countryList" :value="item.code" :key="index">{{item.name}}</option>
                </select>
                <div v-if="!$v.country.required" class="invalid-feedback">You must select a country</div>
            </div>
            <div class="col-12 form-group">
                <label for="password" class="col-form-label col-form-label-lg">Password </label><span class="text-danger"> * </span>
                <input type="password" :class="{'is-invalid':validationStatus($v.password)}"  v-model="password" id="password" class="form-control form-control-lg">
                <div v-if="!$v.password.required" class="invalid-feedback">The full password field is required</div>
                <div v-if="!$v.password.minLength" class="invalid-feedback">The password must have at least {{$v.password.$params.minLength.min}} characters</div>
                <div v-if="!$v.password.maxLength" class="invalid-feedback">The password must have at most {{$v.password.$params.maxLength.max}} characters</div>
            </div>
            <div class="col-12 form-group">
                <label for="password2" class="col-form-label col-form-label-lg">Confirm password </label><span class="text-danger"> * </span>
                <input type="password" :class="{'is-invalid':validationStatus($v.password2)}" v-model="password2" id="password2" class="form-control form-control-lg">
                <div v-if="!$v.password2.required" class="invalid-feedback">You must confirm the password</div>
                <div v-if="!$v.password2.minLength" class="invalid-feedback">The password must have at least {{$v.password2.$params.minLength.min}} characters</div>
                <div v-if="!$v.password2.maxLength" class="invalid-feedback">The password must have at most {{$v.password2.$params.maxLength.max}} characters</div>
            </div>
            <div class="col-12 form-group text-center">
                <button class="btn btn-vue btn-lg col-6">Sign up</button>
            </div>
        </div>
    </form>
</template>
<script>
import {required, email, minLength, maxLength} from 'vuelidate/lib/validators'
export default {
    name: 'SignupForm',
    data(){
        return{
            fullname: '',
            email: '',
            country: '',
            password: '',
            password2: '',
            countryList: []
        }
    },
    methods: {
        validationStatus(validation){
            return typeof validation != 'undefined' ? validation.$error : false;
        },
        resetForm(){
            this.fullname='';
            this.email='';
            this.country='';
            this.password='';
            this.password2='';
        },

        submit(e){
            this.$v.$touch();
            if(this.$v.$pending || this.$v.$error) return;
            alert("Formulaire OK " + typeof e.currentTarget);
            this.$v.$reset();
            this.resetForm();
        }
    },
    validations: {
        fullname:{required},
        email:{required, email},
        country:{required},
        password:{required, minLength: minLength(6), maxLength: maxLength(18)},
        password2:{required, minLength: minLength(6), maxLength: maxLength(18)},
    },
    mounted(){
        this.countryList = require('@/data/countries.json');
        // console.log(this.countryList);
    }
}
</script>
<style lang="css" scoped>
@import url('@/assets/css/bootstrap.min.css');

    .btn-vue{
        background-color: #53b985;
        margin-top: 10px;
    }
</style>