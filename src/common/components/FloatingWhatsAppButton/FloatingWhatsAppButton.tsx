import * as React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Container } from './styles';
import ButtonBase from '@mui/material/ButtonBase';

export function FloatingWhatsAppButton() {
  return (
      <Container aria-label="whatsapp">
        {/* TODO: Add real number here */}
        <ButtonBase LinkComponent="a" target="_blank" href='https://wa.me/5516' sx={{ width: '100%', height: '100%' }}>
          <WhatsAppIcon />
        </ButtonBase>
      </Container>
  );

}
