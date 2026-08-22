import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PlaceholderPage({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description: string;
}) {
    return (
        <main className="bg-background py-20">
            <section className="container mx-auto px-6">
                <div className="eyebrow mb-6">{eyebrow}</div>
                <h1 className="text-4xl font-medium">{title}</h1>
                <p className="mt-4 text-slate-600">{description}</p>
                <div className="mt-8">
                    <Link href="/" className="inline-flex items-center gap-2 bg-[#071A35] text-white px-6 py-3 rounded-sm">
                        Back to Home <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

export function makePlaceholder(eyebrow: string, title: string, description: string) {
    return function Page() {
        return <PlaceholderPage eyebrow={eyebrow} title={title} description={description} />;
    };
}
