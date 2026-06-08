import React from 'react'

const FeaturedProject = () => {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Featured Project
            </p>

            <h2 className="mt-3 text-4xl font-bold">Sunset Daydreams</h2>

            <p className="mt-4 max-w-3xl text-zinc-300">
                A full-stack e-commerce platform with product browsing, cart
                management, JWT authentication, admin inventory tools, order management,
                Stripe embedded checkout, and webhook-based order finalization.
            </p>

            <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
                <h3 className="text-xl font-semibold">Technical Challenge</h3>
                <p className="mt-3 text-zinc-300">
                    After migrating to Stripe embedded checkout, payments succeeded but
                    backend orders were not being created because shipping/payment data
                    became available asynchronously. I solved this by creating pending
                    checkout records before payment and finalizing orders through Stripe
                    webhooks after payment success.
                </p>
            </div>
        </section>
    )
}
export default FeaturedProject
