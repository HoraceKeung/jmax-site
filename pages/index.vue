<template>
	<section>
		<background />
		<hero />
		<services />
		<clients />
	</section>
</template>

<script>
import Background from '~/components/Background'
import Hero from '~/components/Hero'
import Services from '~/components/Services'
import Clients from '~/components/Clients'
export default {
	components: {Background, Hero, Services, Clients}
}
</script>
