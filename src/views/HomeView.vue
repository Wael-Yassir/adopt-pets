<template>
  <div class="home">
    <h1>Adopt a new best friend</h1>

    {{ animalsCount }}

    <button class="btn btn-primary" @click="togglePetForm">
      {{ showPetForm ? 'Hide Pet Form' : 'Add New Pet'}}
    </button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="pet-name-group" label="Pet Name:" label-for="pet-name">
        <b-form-input
          id="pet-name"
          v-model="formData.name"
          placeholder="Enter pet name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="pet-species-group" label="species:" label-for="pet-species">
        <b-form-select
          id="pet-species"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="pet-age-group" label="Pet Age:" label-for="pet-age">
        <b-form-input
          id="pet-age"
          type="number"
          v-model="formData.age"
          placeholder="Enter pet age"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  methods: {
    // adding mapAction in method because we are not watching for a change
    // in a static method and which is the case when we put the data at computed
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, name, age } = this.formData

      const payload = {
        species,
        pet: {
          name,
          age
        }
      }

      this.addPet(payload)

      // rest the data at the form
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount'
    ])
  }
}
</script>
