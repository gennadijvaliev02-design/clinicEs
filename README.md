# Clínica Dental Superdent — demo

Static, Spanish-language concept landing page based on the Superdent Instagram screenshots supplied with the request. This is a visual demo; there is no appointment form or booking backend. The current editorial portrait is generated and clearly labelled as illustrative; clinical images remain source-attributed Instagram material and are not retouched.

## Preview

From this folder run:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Source material

The unmodified supplied screenshots are in `references/`. Local WebP assets are in `assets/images/`. Clinical image captions/alt identify social media imagery as such. `hero-editorial.webp` is an AI-generated illustrative image, not a real Superdent patient or staff member. No clinical image was retouched or generated.

Confirmed profile information shown here: Clínica Dental Superdent, @clinicasuperdent, Av. Caminos del Inca 2873, Surco, Lima, Peru 051, phone 557-8544, and the profile's tagline. The page links to the Instagram and Facebook profiles from the supplied screenshot. It does not invent a doctor's name, schedule, price, credentials, patient review, treatment guarantee, or WhatsApp contact.

The requested Antigravity CLI prompt is in `AGY-PROMPT.md`. Running `agy` from the VPS returned `User location is not supported for the API use`, so this demo was implemented locally in the workspace instead.
