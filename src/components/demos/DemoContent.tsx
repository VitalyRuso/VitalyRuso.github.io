import type { DemoId } from '../../data/portfolio'
import { ActionPilotDemo } from './ActionPilotDemo'
import { SpainHelperDemo } from './SpainHelperDemo'
import { VisualFoundryDemo } from './VisualFoundryDemo'
import { WorkspaceDemo } from './WorkspaceDemo'

export function DemoContent({ demo }: { demo: DemoId }) {
  if (demo === 'actionpilot') return <ActionPilotDemo />
  if (demo === 'workspace') return <WorkspaceDemo />
  if (demo === 'spain-helper') return <SpainHelperDemo />
  return <VisualFoundryDemo />
}
