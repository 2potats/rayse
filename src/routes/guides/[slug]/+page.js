import { error } from '@sveltejs/kit';
import { Posts, getSlugs } from '$lib/data';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const slugs = getSlugs();
	if (slugs.includes(params.slug)) {
		const { title, content } = Posts[params.slug];
		return {
			title,
			content
		};
	}

	throw error(404, 'Not found');
}
