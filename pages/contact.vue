<template>
    <section>
		<contact-form />
		<address-map />
    </section>
</template>

<script>
import ContactForm from '~/components/ContactForm'
import AddressMap from '~/components/AddressMap'
export default {
	components: {ContactForm, AddressMap}
}
</script>
