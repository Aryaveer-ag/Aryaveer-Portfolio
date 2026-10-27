import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StudioHero } from "@/components/hero/StudioHero";
import { CompetencyMatrix } from "@/components/competencies/CompetencyMatrix";
import {
  Container,
  PageSection,
  SectionHeading,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Button,
} from "@/components/common";
import { studioProfile } from "@/data/profile";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] flex flex-col justify-between">
      {/* Studio Header & Navigation */}
      <Header />

      <main className="flex-1">
        {/* Studio Hero with Telemetry */}
        <StudioHero />

        {/* Milestone 2: Systems & Engineering Competency Matrix */}
        <CompetencyMatrix />

        {/* Studio Architecture & Upcoming Milestones */}
        <PageSection id="case-studies" spacing="spacious" divided>
          <Container size="lg">
            <SectionHeading
              eyebrow="02 // ARCHITECTURE ROADMAP"
              title="Interactive Studio Case Studies &amp; Lab"
              description="Upcoming milestones scheduled in Aryaveer.dev — deep-dive project architecture walkthroughs, browser-based algorithmic simulations, and direct freelance contracting."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Case Studies Preview */}
              <Card variant="interactive" className="flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <Badge variant="indigo" size="sm" className="w-fit mb-2">
                      Milestone 3
                    </Badge>
                    <CardTitle>Engineering Case Studies</CardTitle>
                    <CardDescription>
                      Full architectural breakdowns of backend systems, data pipelines, and distributed design patterns.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Includes system diagrams, data flow specifications, performance tradeoffs, and verifiable code links.
                    </p>
                  </CardContent>
                </div>
                <CardFooter>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
                    Next Milestone
                  </span>
                  <Badge variant="neutral" size="sm">
                    In Design
                  </Badge>
                </CardFooter>
              </Card>

              {/* Engineering Lab Preview */}
              <Card id="lab" variant="interactive" className="flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <Badge variant="cyan" size="sm" className="w-fit mb-2">
                      Milestone 4
                    </Badge>
                    <CardTitle>Engineering Lab</CardTitle>
                    <CardDescription>
                      Interactive, browser-based simulations demonstrating rate-limiting algorithms and cache eviction strategies.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Explore Token Bucket and Sliding Window rate-limiters with real-time throughput and drop rate telemetry.
                    </p>
                  </CardContent>
                </div>
                <CardFooter>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
                    Algorithmic Lab
                  </span>
                  <Badge variant="neutral" size="sm">
                    Scheduled
                  </Badge>
                </CardFooter>
              </Card>

              {/* Freelance Inquiry Preview */}
              <Card id="inquiry" variant="interactive" className="flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <Badge variant="emerald" size="sm" className="w-fit mb-2">
                      Milestone 6
                    </Badge>
                    <CardTitle>Client Inquiry &amp; Contracts</CardTitle>
                    <CardDescription>
                      Structured freelance project scoping for backend architectures, custom APIs, and ML service integrations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-xs text-[var(--text-secondary)]">
                        Direct contracting and verified escrow engagements through Upwork.
                      </p>
                      <Button
                        variant="secondary"
                        size="sm"
                        href={studioProfile.links.upwork}
                        isExternal
                        className="w-full"
                      >
                        Hire via Upwork
                      </Button>
                    </div>
                  </CardContent>
                </div>
                <CardFooter>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
                    Upwork Verified
                  </span>
                  <Badge variant="emerald" size="sm">
                    Open
                  </Badge>
                </CardFooter>
              </Card>
            </div>
          </Container>
        </PageSection>
      </main>

      {/* Studio Footer */}
      <Footer />
    </div>
  );
}
