
<script>
export default {
  data() {
	return {
		name: 'john',
		surn: 'smit',
	}
},
methods: {
	change: function() {
		this.name = 'Vasya';
	}
},
computed: {
	full: function() {
		return this.name + ' ' + this.surn;
	}
},

}
</script>

<template>
	<p>{{ name }}</p>
	<p>{{ surn }}</p>
	<p>{{ full }}</p>
  <button @click="change">change</button>

</template>

<style scoped></style>
