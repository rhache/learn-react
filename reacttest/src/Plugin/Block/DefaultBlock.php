<?php

namespace Drupal\reacttest\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'DefaultBlock' block.
 *
 * @Block(
 *  id = "default_block",
 *  admin_label = @Translation("Default block"),
 * )
 */
class DefaultBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['default_block']['#markup'] = '<div id="app"></div>';
    $build['default_block']['#attached']['library'][] = 'reacttest/default';

    return $build;
  }

}
