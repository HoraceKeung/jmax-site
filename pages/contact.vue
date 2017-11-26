<template>
    <section>
		<contact-form />
		<career />
		<address-map />
    </section>
</template>

<script>
import ContactForm from '~/components/ContactForm'
import Career from '~/components/Career'
import AddressMap from '~/components/AddressMap'
export default {
	components: {ContactForm, Career, AddressMap}
}
</script>
