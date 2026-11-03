import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { TEAM_MEMBERS } from '@/data/teamData';
import { TeamMemberDetailClient } from './TeamMemberDetailClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return TEAM_MEMBERS.map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const member = TEAM_MEMBERS.find((m) => m.id === id);

  if (!member) {
    return {
      title: 'Team Dossier | Traveli Expeditions',
    };
  }

  return {
    title: `${member.name} — ${member.role} | Traveli Himalayas`,
    description: `${member.name}, ${member.role} at Traveli. ${member.summary} Origin: ${member.origin}.`,
  };
}

export default async function TeamMemberDetailPage({ params }: PageProps) {
  const { id } = await params;
  const member = TEAM_MEMBERS.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  const otherMembers = TEAM_MEMBERS.filter((m) => m.id !== member.id).slice(0, 3);

  return (
    <TeamMemberDetailClient
      member={member}
      otherMembers={otherMembers}
    />
  );
}

