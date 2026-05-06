import React from 'react';
import { CompatibilityLevel } from '@/lib/types';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface Props {
  compatibility: CompatibilityLevel;
}

/**
 * CompatibilityPanel summarises how well the current system can run the
 * selected model. It displays a coloured icon and descriptive label. In
 * the full implementation this panel might also show detailed system
 * requirements compared to the user's hardware.
 */
export default function CompatibilityPanel({ compatibility }: Props) {
  let color = '';
  let icon = null;
  let label = '';
  switch (compatibility) {
    case 'excellent':
      color = 'text-primary';
      icon = <CheckCircle size={18} className={color} />;
      label = 'Excellent compatibility';
      break;
    case 'good':
      color = 'text-blue';
      icon = <CheckCircle size={18} className={color} />;
      label = 'Good compatibility';
      break;
    case 'warning':
      color = 'text-warning';
      icon = <AlertTriangle size={18} className={color} />;
      label = 'May require tweaks';
      break;
    case 'unsupported':
      color = 'text-danger';
      icon = <XCircle size={18} className={color} />;
      label = 'Unsupported runtime';
      break;
  }
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className={`text-sm ${color}`}>{label}</span>
    </div>
  );
}