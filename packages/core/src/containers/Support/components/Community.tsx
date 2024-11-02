/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import React from 'react';
import {
  Earth,
  GitbookDuotone,
  Github,
  TwitterDuotone,
  TelegramDuotone,
  DiscordDuotone,
  Git,
  Star,
} from '@kubed/icons';

import { useUrl } from '@ks-console/shared';
import {
  Root,
  Container,
  Title,
  Buttons,
  Button,
  ButtonText,
  Links,
  Link,
  LintText,
} from './Community.styles';

const BUTTONS = [
  {
    key: 'website',
    icon: Earth,
    localeKey: 'WEBSITE',
  },
  {
    key: 'gitbook',
    icon: GitbookDuotone,
    localeKey: 'GITBOOK',
  },
  {
    key: 'github',
    icon: Github,
    localeKey: 'GITHUB',
  },
  {
    key: 'twitter',
    icon: TwitterDuotone,
    localeKey: 'TWITTER',
  },
  {
    key: 'telegram',
    icon: TelegramDuotone,
    localeKey: 'TELEGRAM',
  },
  {
    key: 'discord',
    icon: DiscordDuotone,
    localeKey: 'DISCORD',
  },
];

const LINKS = [
  {
    key: 'github',
    icon: Github,
    iconStyle: { color: '' },
    localeKey: 'REPS_ADDRESS',
  },
  {
    key: 'githubPr',
    icon: Git,
    iconStyle: { color: '#329dce' },
    localeKey: 'CODE_CONTRIBUTE',
  },
  {
    key: 'star',
    icon: Star,
    iconStyle: { color: '#f5a623' },
    localeKey: 'GITHUB_STAR',
  },
];

export function Community() {
  const { getConfigSupportLink } = useUrl({ module: '' });

  return (
    <Root>
      <Container>
        <Title>{t('COMMUNITY_SUPPORT')}</Title>
        <Buttons>
          {BUTTONS.map(({ key, icon: Icon, localeKey }) => (
            <Button
              key={key}
              rel="noopener noreferrer"
              target="_blank"
              href={getConfigSupportLink(key)}
            >
              <Icon size={20} />
              <ButtonText>{t(localeKey)}</ButtonText>
            </Button>
          ))}
        </Buttons>
      </Container>
      <Links>
        {LINKS.map(({ key, icon: Icon, iconStyle, localeKey }) => (
          <Link
            key={key}
            href={getConfigSupportLink(key)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={20} style={iconStyle} />
            <LintText>{t(localeKey)}</LintText>
          </Link>
        ))}
      </Links>
    </Root>
  );
}
