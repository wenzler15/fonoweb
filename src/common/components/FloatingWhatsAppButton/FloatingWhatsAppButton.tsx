import * as React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ButtonContent, Container, Label } from './styles';
import ButtonBase from '@mui/material/ButtonBase';

export function FloatingWhatsAppButton() {
  return (
    <Container>
      <ButtonContent aria-label="whatsapp">
        {/* TODO: Add real number here */}
        <ButtonBase LinkComponent="a" target="_blank" href='https://wa.me/5516' sx={{ width: '100%', height: '100%' }}>
          <WhatsAppIcon />
        </ButtonBase>
      </ButtonContent>
      <Label>Suporte</Label>
    </Container>
  );

}
