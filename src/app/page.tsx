import { siteConfig } from "@/config/site";
import {
  Container,
  PageSection,
  SectionHeading,
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  TextLink,
} from "@/components/common";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Top Studio Status Navigation Bar */}
      <header className="border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/80 backdrop-blur sticky top-0 z-50">
        <Container size="lg" className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold tracking-tight text-[var(--text-primary)]">
              {siteConfig.name}
            </span>
            <span className="text-[var(--border-strong)]">/</span>
            <Badge variant="emerald" dot pulse size="sm">
              Studio Online
            </Badge>
          </div>

          <nav className="flex items-center gap-4 text-xs font-mono">
            <span className="text-[var(--text-muted)] hidden sm:inline">
              {siteConfig.author.status}
            </span>
            <Button
              variant="outline"
              size="sm"
              href={siteConfig.links.upwork}
              isExternal
            >
              Upwork Profile
            </Button>
          </nav>
        </Container>
      </header>

      <main>
        {/* Studio Hero Section */}
        <PageSection spacing="normal" className="border-b border-[var(--border-subtle)]">
          <Container size="lg">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="cyan" mono>
                  {siteConfig.author.institution}
                </Badge>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  • B.Tech Final Year
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
                {siteConfig.author.name}
              </h1>

              <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-light leading-relaxed">
                Software Engineer specializing in robust backend systems, distributed architectures, machine learning workflows, and algorithm design.
              </p>

              {/* Core Domains */}
              <div className="flex flex-wrap gap-2 pt-2">
                {siteConfig.author.domains.map((domain) => (
                  <Badge key={domain} variant="neutral" size="sm">
                    {domain}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Button variant="primary" size="md">
                  Explore Case Studies
                </Button>
                <Button variant="secondary" size="md">
                  Open Engineering Lab
                </Button>
                <Button
                  variant="ghost"
                  size="md"
                  href={siteConfig.links.github}
                  isExternal
                >
                  GitHub Workspace
                </Button>
              </div>
            </div>
          </Container>
        </PageSection>

        {/* Temporary Style & Design System Preview Section */}
        <PageSection spacing="spacious" className="bg-[var(--bg-base)]">
          <Container size="lg">
            <SectionHeading
              eyebrow="SYSTEM SPECIFICATION / MILESTONE 1.5"
              title="Design Foundation & Component Preview"
              description="Review of design tokens, surface hierarchy, interactive states, typography, and reusable primitives implemented for Aryaveer.dev."
              action={
                <Badge variant="indigo" mono size="sm">
                  Design Tokens v1.0
                </Badge>
              }
            />

            <div className="space-y-16">
              {/* 1. Surface & Color Swatches */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                  01 // Surface Hierarchy & Accent Swatches
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                  <div className="p-3 rounded-[var(--radius-md)] bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">Base</div>
                    <div className="text-xs font-mono font-semibold text-[var(--text-primary)]">#080B11</div>
                  </div>
                  <div className="p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-1)] border border-[var(--border-subtle)] space-y-1">
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">Surface 1</div>
                    <div className="text-xs font-mono font-semibold text-[var(--text-primary)]">#0E131F</div>
                  </div>
                  <div className="p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-2)] border border-[var(--border-default)] space-y-1">
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">Surface 2</div>
                    <div className="text-xs font-mono font-semibold text-[var(--text-primary)]">#141C2C</div>
                  </div>
                  <div className="p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-3)] border border-[var(--border-default)] space-y-1">
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">Surface 3</div>
                    <div className="text-xs font-mono font-semibold text-[var(--text-primary)]">#1A2438</div>
                  </div>
                  <div className="p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-1)] border border-emerald-800/80 space-y-1">
                    <div className="text-[10px] font-mono text-emerald-400">Accent Emerald</div>
                    <div className="text-xs font-mono font-semibold text-emerald-400">#10B981</div>
                  </div>
                  <div className="p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-1)] border border-cyan-800/80 space-y-1">
                    <div className="text-[10px] font-mono text-cyan-400">Accent Cyan</div>
                    <div className="text-xs font-mono font-semibold text-cyan-400">#06B6D4</div>
                  </div>
                  <div className="p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-1)] border border-blue-800/80 space-y-1">
                    <div className="text-[10px] font-mono text-blue-400">Accent Indigo</div>
                    <div className="text-xs font-mono font-semibold text-blue-400">#3B82F6</div>
                  </div>
                </div>
              </div>

              {/* 2. Typography Scale */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                  02 // Typography & Visual Hierarchy
                </h3>
                <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--bg-surface-1)] border border-[var(--border-subtle)] space-y-6">
                  <div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)] mb-1">Display H1 (Bold 48px/60px)</div>
                    <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                      Distributed Systems &amp; High-Throughput Pipelines
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)] mb-1">Section H2 (SemiBold 24px/32px)</div>
                    <div className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                      Interactive Engineering Lab Simulations
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)] mb-1">Body Text (Regular 15px)</div>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                      Components and modules are built around SOLID design principles. Adding new engineering project case studies or interactive simulations is accomplished via typed configuration data without rewriting core rendering interfaces.
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)] mb-1">Monospace Spec / Data Label</div>
                    <div className="font-mono text-xs text-[var(--accent-cyan)]">
                      NODE_ENV=production • ARCH=x86_64 • RUNTIME=Next.js_AppRouter • LATENCY=&lt;12ms
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Button Component States & Sizes */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                  03 // Reusable Button Primitives
                </h3>
                <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--bg-surface-1)] border border-[var(--border-subtle)] space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="primary" size="md">
                      Primary Action
                    </Button>
                    <Button variant="secondary" size="md">
                      Secondary Action
                    </Button>
                    <Button variant="outline" size="md">
                      Outline Action
                    </Button>
                    <Button variant="ghost" size="md">
                      Ghost Action
                    </Button>
                    <Button variant="primary" size="md" disabled>
                      Disabled State
                    </Button>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[var(--border-subtle)]">
                    <span className="text-xs font-mono text-[var(--text-muted)] mr-2">Sizes:</span>
                    <Button variant="secondary" size="sm">
                      Small (sm)
                    </Button>
                    <Button variant="secondary" size="md">
                      Medium (md)
                    </Button>
                    <Button variant="secondary" size="lg">
                      Large (lg)
                    </Button>
                  </div>
                </div>
              </div>

              {/* 4. Badges & System Status Indicators */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                  04 // Badge &amp; Status Indicators
                </h3>
                <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--bg-surface-1)] border border-[var(--border-subtle)] flex flex-wrap gap-3">
                  <Badge variant="emerald" dot pulse>
                    Available for Contracts
                  </Badge>
                  <Badge variant="cyan" dot>
                    Active Simulation
                  </Badge>
                  <Badge variant="indigo">
                    Architecture Case Study
                  </Badge>
                  <Badge variant="amber" dot>
                    Experimental Flag
                  </Badge>
                  <Badge variant="neutral">
                    TypeScript 5.0
                  </Badge>
                  <Badge variant="outline">
                    Static Build Target
                  </Badge>
                </div>
              </div>

              {/* 5. Card Variants & Layout */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                  05 // Card Layouts &amp; Interactive Hierarchy
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Default Card */}
                  <Card variant="default">
                    <CardHeader>
                      <Badge variant="neutral" size="sm" className="w-fit mb-2">
                        Core Module
                      </Badge>
                      <CardTitle>System Telemetry</CardTitle>
                      <CardDescription>
                        Standard container with subtle borders and charcoal surface elevation.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs font-mono text-[var(--text-secondary)] space-y-1">
                        <div>CPU: 4 Cores Available</div>
                        <div>MEM: 512MB Buffer</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <span>Telemetry Feed</span>
                      <span className="text-emerald-400 font-mono">STABLE</span>
                    </CardFooter>
                  </Card>

                  {/* Interactive Card */}
                  <Card variant="interactive">
                    <CardHeader>
                      <Badge variant="cyan" size="sm" className="w-fit mb-2">
                        Interactive
                      </Badge>
                      <CardTitle>Rate Limiter Lab</CardTitle>
                      <CardDescription>
                        Hoverable card with active border transitions and interactive states.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-[var(--text-secondary)]">
                        Token Bucket and Leaky Bucket algorithmic simulation with user-tuned burst rates.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <TextLink href="#lab" variant="arrow">
                        Launch Simulation
                      </TextLink>
                    </CardFooter>
                  </Card>

                  {/* Subtle / Stat Card */}
                  <Card variant="subtle">
                    <CardHeader>
                      <Badge variant="indigo" size="sm" className="w-fit mb-2">
                        Profile Metric
                      </Badge>
                      <CardTitle>Academic Foundation</CardTitle>
                      <CardDescription>
                        Delhi Technological University (DTU)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        <div className="text-xs text-[var(--text-muted)]">Focus Areas</div>
                        <div className="text-xs font-mono text-[var(--text-primary)]">
                          Backend, ML &amp; DSA
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <span>Class of 2026</span>
                      <Badge variant="neutral" size="sm">Verified</Badge>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* 6. Typography Links */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                  06 // Link Primitives &amp; Focus Styling
                </h3>
                <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--bg-surface-1)] border border-[var(--border-subtle)] flex flex-wrap items-center gap-8">
                  <TextLink href="#default" variant="default">
                    Standard Text Link
                  </TextLink>
                  <TextLink href="#underline" variant="underline">
                    Underlined Anchor
                  </TextLink>
                  <TextLink href="https://github.com" variant="arrow" isExternal>
                    External Repository Link
                  </TextLink>
                  <TextLink href="#muted" variant="muted">
                    Muted Metadata Link
                  </TextLink>
                </div>
              </div>
            </div>
          </Container>
        </PageSection>
      </main>

      {/* Studio Footer */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-base)] py-12">
        <Container size="lg" className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[var(--text-muted)] gap-4">
          <div>
            &copy; 2026 {siteConfig.author.name} — All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <TextLink href={siteConfig.links.github} variant="muted" isExternal>
              GitHub
            </TextLink>
            <TextLink href={siteConfig.links.linkedin} variant="muted" isExternal>
              LinkedIn
            </TextLink>
            <TextLink href={siteConfig.links.upwork} variant="muted" isExternal>
              Upwork
            </TextLink>
          </div>
        </Container>
      </footer>
    </div>
  );
}
