import React from "react";
import {
  Container,
  PageSection,
  Badge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/common";
import { studioProfile } from "@/data/profile";

export function StudioHero() {
  return (
    <PageSection spacing="normal" className="border-b border-[var(--border-subtle)] bg-grid-pattern">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Identity & Intent */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cyan" mono size="sm">
                {studioProfile.institution}
              </Badge>
              <span className="text-xs text-[var(--text-muted)] font-mono">
                • {studioProfile.degree} ({studioProfile.graduatingYear})
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
                {studioProfile.name}
              </h1>
              <p className="font-mono text-sm sm:text-base text-[var(--accent-cyan)] font-medium">
                {studioProfile.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl">
              {studioProfile.headline}
            </p>

            {/* Specialization Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {studioProfile.specializations.map((spec) => (
                <span
                  key={spec}
                  className="font-mono text-xs bg-[var(--bg-surface-2)] border border-[var(--border-default)] text-[var(--text-secondary)] px-3 py-1 rounded-[var(--radius-sm)]"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Button variant="primary" size="md" href="#competencies">
                View Competencies
              </Button>
              <Button variant="secondary" size="md" href="#lab">
                Engineering Lab
              </Button>
              <Button
                variant="outline"
                size="md"
                href={studioProfile.links.upwork}
                isExternal
              >
                Upwork Profile
              </Button>
            </div>
          </div>

          {/* Right Column: Studio Telemetry / Workstation Card */}
          <div className="lg:col-span-5">
            <Card variant="default" className="border-[var(--border-default)] bg-[var(--bg-surface-1)]">
              <CardHeader className="border-b border-[var(--border-subtle)] pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-emerald)] font-semibold">
                      ENGINEERING_SPECS
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">
                    DTU // VERIFIED
                  </span>
                </div>
                <CardTitle as="h3" className="text-sm font-mono text-[var(--text-primary)] pt-1">
                  Studio Environment Telemetry
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-2">
                <dl className="space-y-3 divide-y divide-[var(--border-subtle)] text-xs font-mono">
                  {studioProfile.specs.map((item, idx) => (
                    <div
                      key={item.label}
                      className={`flex justify-between items-start gap-4 ${
                        idx > 0 ? "pt-3" : ""
                      }`}
                    >
                      <dt className="text-[var(--text-muted)] shrink-0">
                        {item.label}
                      </dt>
                      <dd className="text-[var(--text-primary)] text-right font-medium">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </CardContent>

              <CardFooter className="bg-[var(--bg-surface-2)]/40 -mx-5 md:-mx-6 -mb-5 md:-mb-6 px-5 md:px-6 py-3 rounded-b-[var(--radius-lg)] border-t border-[var(--border-subtle)]">
                <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                  Availability: Open for Contract
                </span>
                <Badge variant="emerald" size="sm">
                  Ready
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

