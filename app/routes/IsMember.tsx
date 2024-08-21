// src/IsMember.tsx
import React from 'react';

function IsMember({ id, act }: { id: number; act: boolean }) {
  return (
    <span>
      {act ? '✅ สวัสดี, สมาชิก VIP' : '❌ สมาชิกทั่วไป!'}
    </span>
  );
}

export default IsMember;
