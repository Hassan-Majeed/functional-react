import { useEffect } from 'react';

export default function useWindowTitle(title) {
  useEffect(() => {
    document.title = `Admin Dashboard | ${title}`
  }, [title])  
}
